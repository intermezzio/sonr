package highway

import (
	context "context"

	ot "go.buf.build/grpc/go/sonr-io/sonr/object"
)

// CreateObject creates a new object.
func (s *HighwayServer) CreateObject(ctx context.Context, req *ot.MsgCreateObject) (*ot.MsgCreateObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ReadObject reads an object.
func (s *HighwayServer) ReadObject(ctx context.Context, req *ot.MsgReadObject) (*ot.MsgReadObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// UpdateObject updates an object.
func (s *HighwayServer) UpdateObject(ctx context.Context, req *ot.MsgUpdateObject) (*ot.MsgUpdateObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// DeleteObject deletes an object.
func (s *HighwayServer) DeleteObject(ctx context.Context, req *ot.MsgDeleteObject) (*ot.MsgDeleteObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}