package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/sonr/x/registry/keeper"
	"github.com/sonr-io/sonr/x/registry/types"
)

func SimulateMsgSellAlias(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)

		// Creates a mock did document for the provided simulated account
		doc, err := CreateMockDidDocument(simAccount)
		if err != nil {
			return simtypes.NoOpMsg(types.ModuleName, "createWhoIs", "failed to create mock did document"), nil, err
		}

		// Marshal Json document
		docBytes, err := doc.MarshalJSON()
		if err != nil {
			return simtypes.NoOpMsg(types.ModuleName, "createWhoIs", "failed to marshal json document"), nil, err
		}

		msg := &types.MsgCreateWhoIs{
			Creator:     simAccount.Address.String(),
			DidDocument: docBytes,
			WhoisType:   types.WhoIsType_USER,
		}

		txCreateCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		_, _, err = simulation.GenAndDeliverTxWithRandFees(txCreateCtx)
		if err != nil {
			return simtypes.NoOpMsg(types.ModuleName, "createWhoIs", "failed to create whois"), nil, err
		}

		buymsg := &types.MsgBuyAlias{
			Creator: simAccount.Address.String(),
			Name:    "test",
		}

		txSellCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             buymsg,
			MsgType:         buymsg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(sdk.NewInt64Coin("snr", 100)),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}

		_, _, err = simulation.GenAndDeliverTxWithRandFees(txSellCtx)
		if err != nil {
			return simtypes.NoOpMsg(types.ModuleName, "createWhoIs", "failed to create whois"), nil, err
			return simtypes.NoOpMsg(types.ModuleName, "buyAlias", "failed to buy alias"), nil, err
		}

		sellmsg := &types.MsgSellAlias{
			Creator: simAccount.Address.String(),
			Alias:   "test",
			Amount:  11,
		}

		txTransferCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             sellmsg,
			MsgType:         sellmsg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}

		return simulation.GenAndDeliverTxWithRandFees(txTransferCtx)
	}
}