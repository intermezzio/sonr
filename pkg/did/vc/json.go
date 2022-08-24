package vc

import (
	"github.com/sonr-io/sonr/pkg/did/internal/marshal"
)

const (
	contextKey              = "@context"
	typeKey                 = "type"
	credentialSubjectKey    = "credentialSubject"
	proofKey                = "proof"
	verifiableCredentialKey = "verifiableCredential"
)

var pluralContext = marshal.Plural(contextKey)
