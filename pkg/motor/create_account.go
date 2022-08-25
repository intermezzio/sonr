package motor

import (
	"errors"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/pkg/client"
	"github.com/sonr-io/sonr/pkg/crypto/mpc"
	"github.com/sonr-io/sonr/pkg/did"
	"github.com/sonr-io/sonr/pkg/tx"
	"github.com/sonr-io/sonr/pkg/vault"
	mt "github.com/sonr-io/sonr/third_party/types/motor"
	rt "github.com/sonr-io/sonr/x/registry/types"
)

func (mtr *motorNodeImpl) CreateAccount(request mt.CreateAccountRequest) (mt.CreateAccountResponse, error) {
	// create motor
	mtr.callback.OnLog("Initializing MPC Wallet")
	if err := initMotor(mtr); err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("initialize motor: %s", err)
	}

	// Request from Faucet
	mtr.callback.OnLog("Requesting Faucet Airdrop")
	err := mtr.Cosmos.RequestFaucet(mtr.Address)
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("request from faucet: %s", err)
	}

	// Create Initial Shards
	mtr.callback.OnLog("Creating Shards")
	deviceShard, sharedShard, recShard, unusedShards, err := mtr.Wallet.CreateInitialShards()
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("create shards: %s", err)
	}
	mtr.deviceShard = deviceShard
	mtr.sharedShard = sharedShard
	mtr.recoveryShard = recShard
	mtr.unusedShards = unusedShards

	// Create the DID Document
	doc, err := did.NewDocument(mtr.DID.String())
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("create DID document: %s", err)
	}
	mtr.DIDDocument = doc

	// create Vault shards to make sure this works before creating WhoIs
	mtr.callback.OnLog("Building DID Document")
	vc := vault.New()
	if _, err := createWhoIs(mtr); err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("create account: %s", err)
	}

	// ecnrypt dscShard with DSC
	mtr.callback.OnLog("Encrypting Shards")
	dscShard, err := dscEncrypt(mtr.deviceShard, request.AesDscKey)
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("encrypt backup shards: %s", err)
	}

	// encrypt pskShard with psk (must be generated)
	pskShard, psk, err := pskEncrypt(mtr.sharedShard)
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("encrypt psk shards: %s", err)
	}

	// password protect the recovery shard
	pwShard, err := mpc.AesEncryptWithPassword(request.Password, mtr.recoveryShard)
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("encrypt password shard: %s", err)
	}

	// create vault
	mtr.callback.OnLog("Setting up IPFS Vault")
	vaultService, err := vc.CreateVault(
		mtr.Address,
		mtr.unusedShards,
		mtr.DeviceID,
		dscShard,
		pskShard,
		pwShard,
	)
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("setup vault: %s", err)
	}

	// update DID Document
	mtr.callback.OnLog("Broadcasting new account TX")
	mtr.DIDDocument.AddService(vaultService)

	// update whois
	if _, err = updateWhoIs(mtr); err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("update WhoIs: %s", err)
	}

	docBytes, err := mtr.DIDDocument.MarshalJSON()
	if err != nil {
		return mt.CreateAccountResponse{}, fmt.Errorf("serialize DID Document: %s", err)
	}

	return mt.CreateAccountResponse{
		AesPsk:      psk,
		Address:     mtr.Address,
		DidDocument: docBytes,
	}, err
}

func createWhoIs(m *motorNodeImpl) (*sdk.TxResponse, error) {
	docBz, err := m.DIDDocument.MarshalJSON()
	if err != nil {
		return nil, err
	}

	msg1 := rt.NewMsgCreateWhoIs(m.Address, m.PubKey, docBz, rt.WhoIsType_USER)
	txRaw, err := tx.SignTxWithWallet(m.Wallet, "/sonrio.sonr.registry.MsgCreateWhoIs", msg1)
	if err != nil {
		return nil, err
	}

	resp, err := m.Cosmos.BroadcastTx(txRaw)
	if err != nil {
		return nil, err
	}

	cwir := &rt.MsgCreateWhoIsResponse{}
	if err := client.DecodeTxResponseData(resp.TxResponse.Data, cwir); err != nil {
		return nil, err
	}

	return resp.TxResponse, nil
}

func updateWhoIs(m *motorNodeImpl) (*sdk.TxResponse, error) {
	docBz, err := m.DIDDocument.MarshalJSON()
	if err != nil {
		return nil, err
	}

	msg1 := rt.NewMsgUpdateWhoIs(m.Address, docBz)
	txRaw, err := tx.SignTxWithWallet(m.Wallet, "/sonrio.sonr.registry.MsgUpdateWhoIs", msg1)
	if err != nil {
		return nil, err
	}

	resp, err := m.Cosmos.BroadcastTx(txRaw)
	if err != nil {
		return nil, err
	}

	cwir := &rt.MsgUpdateWhoIsResponse{}
	if err := client.DecodeTxResponseData(resp.TxResponse.Data, cwir); err != nil {
		return nil, err
	}

	return resp.TxResponse, nil
}

func pskEncrypt(shard []byte) ([]byte, []byte, error) {
	key, err := mpc.NewAesKey()
	if err != nil {
		return nil, nil, err
	}

	cipherShard, err := mpc.AesEncryptWithKey(key, shard)
	if err != nil {
		return nil, key, err
	}

	return cipherShard, key, nil
}

func dscEncrypt(shard, dsc []byte) ([]byte, error) {
	if len(dsc) != 32 {
		return nil, errors.New("dsc must be 32 bytes")
	}
	return mpc.AesEncryptWithKey(dsc, shard)
}
