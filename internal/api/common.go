package api

import (
	"github.com/kataras/golog"
	common "github.com/sonr-io/core/internal/common"
	"github.com/sonr-io/core/internal/keychain"
)

var (
	logger = golog.Child("internal/api")
)

// SignedMetadataToProto converts a SignedMetadata to a protobuf.
func SignedMetadataToProto(m *keychain.SignedMetadata) *common.Metadata {
	return &common.Metadata{
		Timestamp: m.Timestamp,
		NodeId:    m.NodeId,
		PublicKey: m.PublicKey,
	}
}
