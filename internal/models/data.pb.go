// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: data.proto

package models

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Define Metadata Type: For Transfer Request
type Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FileId    string `protobuf:"bytes,1,opt,name=fileId,proto3" json:"fileId,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Path      string `protobuf:"bytes,3,opt,name=path,proto3" json:"path,omitempty"`
	Size      int64  `protobuf:"varint,4,opt,name=size,proto3" json:"size,omitempty"`
	Blocks    int64  `protobuf:"varint,5,opt,name=blocks,proto3" json:"blocks,omitempty"`
	Kind      string `protobuf:"bytes,6,opt,name=kind,proto3" json:"kind,omitempty"`
	Thumbnail []byte `protobuf:"bytes,7,opt,name=thumbnail,proto3" json:"thumbnail,omitempty"`
}

func (x *Metadata) Reset() {
	*x = Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Metadata) ProtoMessage() {}

func (x *Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_data_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Metadata.ProtoReflect.Descriptor instead.
func (*Metadata) Descriptor() ([]byte, []int) {
	return file_data_proto_rawDescGZIP(), []int{0}
}

func (x *Metadata) GetFileId() string {
	if x != nil {
		return x.FileId
	}
	return ""
}

func (x *Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Metadata) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *Metadata) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Metadata) GetBlocks() int64 {
	if x != nil {
		return x.Blocks
	}
	return 0
}

func (x *Metadata) GetKind() string {
	if x != nil {
		return x.Kind
	}
	return ""
}

func (x *Metadata) GetThumbnail() []byte {
	if x != nil {
		return x.Thumbnail
	}
	return nil
}

// Define Contact Type: Will be CSV in Future
type Contact struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FirstName  string `protobuf:"bytes,1,opt,name=firstName,proto3" json:"firstName,omitempty"`
	LastName   string `protobuf:"bytes,2,opt,name=lastName,proto3" json:"lastName,omitempty"`
	ProfilePic string `protobuf:"bytes,3,opt,name=profilePic,proto3" json:"profilePic,omitempty"`
}

func (x *Contact) Reset() {
	*x = Contact{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Contact) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Contact) ProtoMessage() {}

func (x *Contact) ProtoReflect() protoreflect.Message {
	mi := &file_data_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Contact.ProtoReflect.Descriptor instead.
func (*Contact) Descriptor() ([]byte, []int) {
	return file_data_proto_rawDescGZIP(), []int{1}
}

func (x *Contact) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *Contact) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *Contact) GetProfilePic() string {
	if x != nil {
		return x.ProfilePic
	}
	return ""
}

// Define Lobby Type: For Info about Lobby
type Lobby struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code  string           `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Size  int32            `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Peers map[string]*Peer `protobuf:"bytes,3,rep,name=peers,proto3" json:"peers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Lobby) Reset() {
	*x = Lobby{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Lobby) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Lobby) ProtoMessage() {}

func (x *Lobby) ProtoReflect() protoreflect.Message {
	mi := &file_data_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Lobby.ProtoReflect.Descriptor instead.
func (*Lobby) Descriptor() ([]byte, []int) {
	return file_data_proto_rawDescGZIP(), []int{2}
}

func (x *Lobby) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *Lobby) GetSize() int32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Lobby) GetPeers() map[string]*Peer {
	if x != nil {
		return x.Peers
	}
	return nil
}

// Define Peer: Basic Info Sent to Peers
type Peer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Device     string  `protobuf:"bytes,2,opt,name=device,proto3" json:"device,omitempty"`
	Olc        string  `protobuf:"bytes,3,opt,name=olc,proto3" json:"olc,omitempty"`
	FirstName  string  `protobuf:"bytes,4,opt,name=firstName,proto3" json:"firstName,omitempty"`
	LastName   string  `protobuf:"bytes,5,opt,name=lastName,proto3" json:"lastName,omitempty"`
	ProfilePic string  `protobuf:"bytes,6,opt,name=profilePic,proto3" json:"profilePic,omitempty"`
	Direction  float64 `protobuf:"fixed64,7,opt,name=direction,proto3" json:"direction,omitempty"`
	Difference float64 `protobuf:"fixed64,8,opt,name=difference,proto3" json:"difference,omitempty"`
	Distance   float64 `protobuf:"fixed64,9,opt,name=distance,proto3" json:"distance,omitempty"`
}

func (x *Peer) Reset() {
	*x = Peer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Peer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Peer) ProtoMessage() {}

func (x *Peer) ProtoReflect() protoreflect.Message {
	mi := &file_data_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Peer.ProtoReflect.Descriptor instead.
func (*Peer) Descriptor() ([]byte, []int) {
	return file_data_proto_rawDescGZIP(), []int{3}
}

func (x *Peer) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Peer) GetDevice() string {
	if x != nil {
		return x.Device
	}
	return ""
}

func (x *Peer) GetOlc() string {
	if x != nil {
		return x.Olc
	}
	return ""
}

func (x *Peer) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *Peer) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *Peer) GetProfilePic() string {
	if x != nil {
		return x.ProfilePic
	}
	return ""
}

func (x *Peer) GetDirection() float64 {
	if x != nil {
		return x.Direction
	}
	return 0
}

func (x *Peer) GetDifference() float64 {
	if x != nil {
		return x.Difference
	}
	return 0
}

func (x *Peer) GetDistance() float64 {
	if x != nil {
		return x.Distance
	}
	return 0
}

var File_data_proto protoreflect.FileDescriptor

var file_data_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa8, 0x01, 0x0a,
	0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x6c,
	0x65, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x65, 0x49,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x62,
	0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x68, 0x75,
	0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x09, 0x74, 0x68,
	0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x22, 0x63, 0x0a, 0x07, 0x43, 0x6f, 0x6e, 0x74, 0x61,
	0x63, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0a,
	0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x50, 0x69, 0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x50, 0x69, 0x63, 0x22, 0x99, 0x01, 0x0a,
	0x05, 0x4c, 0x6f, 0x62, 0x62, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69,
	0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x27,
	0x0a, 0x05, 0x70, 0x65, 0x65, 0x72, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e,
	0x4c, 0x6f, 0x62, 0x62, 0x79, 0x2e, 0x50, 0x65, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x05, 0x70, 0x65, 0x65, 0x72, 0x73, 0x1a, 0x3f, 0x0a, 0x0a, 0x50, 0x65, 0x65, 0x72, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x1b, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x05, 0x2e, 0x50, 0x65, 0x65, 0x72, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0xf4, 0x01, 0x0a, 0x04, 0x50, 0x65, 0x65,
	0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6f, 0x6c, 0x63,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6f, 0x6c, 0x63, 0x12, 0x1c, 0x0a, 0x09, 0x66,
	0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x73,
	0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x73,
	0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x50, 0x69, 0x63, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x70, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x50, 0x69, 0x63, 0x12, 0x1c, 0x0a, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x1e, 0x0a, 0x0a, 0x64, 0x69, 0x66, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63,
	0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0a, 0x64, 0x69, 0x66, 0x66, 0x65, 0x72, 0x65,
	0x6e, 0x63, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x69, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x64, 0x69, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x42,
	0x0a, 0x5a, 0x08, 0x2e, 0x3b, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_data_proto_rawDescOnce sync.Once
	file_data_proto_rawDescData = file_data_proto_rawDesc
)

func file_data_proto_rawDescGZIP() []byte {
	file_data_proto_rawDescOnce.Do(func() {
		file_data_proto_rawDescData = protoimpl.X.CompressGZIP(file_data_proto_rawDescData)
	})
	return file_data_proto_rawDescData
}

var file_data_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_data_proto_goTypes = []interface{}{
	(*Metadata)(nil), // 0: Metadata
	(*Contact)(nil),  // 1: Contact
	(*Lobby)(nil),    // 2: Lobby
	(*Peer)(nil),     // 3: Peer
	nil,              // 4: Lobby.PeersEntry
}
var file_data_proto_depIdxs = []int32{
	4, // 0: Lobby.peers:type_name -> Lobby.PeersEntry
	3, // 1: Lobby.PeersEntry.value:type_name -> Peer
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_data_proto_init() }
func file_data_proto_init() {
	if File_data_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_data_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Metadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Contact); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Lobby); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Peer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_data_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_data_proto_goTypes,
		DependencyIndexes: file_data_proto_depIdxs,
		MessageInfos:      file_data_proto_msgTypes,
	}.Build()
	File_data_proto = out.File
	file_data_proto_rawDesc = nil
	file_data_proto_goTypes = nil
	file_data_proto_depIdxs = nil
}
