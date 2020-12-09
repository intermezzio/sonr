package file

import (
	"log"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/h2non/filetype"
	md "github.com/sonr-io/core/internal/models"
	"google.golang.org/protobuf/proto"
)

// Define Function Types
type OnProtobuf func(data []byte)
type OnError func(err error, method string)

// Package Error Callback
var onError OnError

// ^ File that safely sets metadata and thumbnail in routine ^ //
type SafeMetadata struct {
	// Callbacks
	CallQueued OnProtobuf

	// Public Properties
	Mime *md.MIME

	// Private Properties
	mutex sync.Mutex
	meta  md.Metadata
	path  string
}

// ^ Create generates file metadata ^ //
func NewMetadata(filePath string, queueCall OnProtobuf, errCall OnError) *SafeMetadata {
	// Set Package Level Callbacks
	onError = errCall

	// Create new SafeFile
	sm := &SafeMetadata{
		CallQueued: queueCall,
		path:       filePath,
	}

	// ** Lock ** //
	sm.mutex.Lock()

	// @ 1. Get File Information
	// Open File at Path
	file, err := os.Open(sm.path)
	if err != nil {
		log.Fatalln(err)
		onError(err, "AddFile")
	}
	defer file.Close()

	// Get Info
	info, err := file.Stat()
	if err != nil {
		log.Fatalln(err)
		onError(err, "AddFile")
	}

	// Read File to required bytes
	head := make([]byte, 261)
	_, err = file.Read(head)
	if err != nil {
		log.Fatalln(err)
		onError(err, "AddFile")
	}

	// Get File Type
	kind, err := filetype.Match(head)
	if err != nil {
		log.Fatalln(err)
		onError(err, "AddFile")
	}

	// @ 2. Set Metadata Protobuf Values
	// Set Metadata
	base := filepath.Base(sm.path)
	sm.meta = md.Metadata{
		Name: strings.TrimSuffix(base, filepath.Ext(sm.path)),
		Path: sm.path,
		Size: int32(info.Size()),
		Mime: &md.MIME{
			Type:    md.MIME_Type(md.MIME_Type_value[kind.MIME.Type]),
			Subtype: kind.MIME.Subtype,
			Value:   kind.MIME.Value,
		},
	}

	// Set Mime
	sm.Mime = sm.meta.Mime

	// @ 3. Create Thumbnail in Goroutine
	go func(sm *SafeMetadata) {
		if filetype.IsImage(head) {
			// New File for ThumbNail
			thumbBytes, err := newThumbnail(sm.path)
			if err != nil {
				log.Fatalln(err)
				onError(err, "AddFile")
			}
			// Update Metadata Value
			sm.meta.Thumbnail = thumbBytes
		}

		// ** Unlock ** //
		sm.mutex.Unlock()

		// Get Metadata
		meta := sm.GetMetadata()

		// Convert to bytes
		data, err := proto.Marshal(meta)
		if err != nil {
			log.Println("Error Marshaling Metadata ", err)
		}

		// Callback with Metadata
		sm.CallQueued(data)
	}(sm)
	return sm
}

// ^ Safely returns metadata depending on lock ^ //
func (sm *SafeMetadata) GetMetadata() *md.Metadata {
	// ** Lock File wait for access ** //
	sm.mutex.Lock()
	defer sm.mutex.Unlock()

	// @ 2. Return Value
	return &sm.meta
}