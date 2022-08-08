package store

import (
	"context"
	"sync"

	"github.com/ipfs/go-datastore"
	dssync "github.com/ipfs/go-datastore/sync"
	"github.com/ipld/go-ipld-prime/storage"
)

// Memory is a datastore.Batching implementation that stores data in memory.
type Memory struct {
	storage.WritableStorage
	dataStore datastore.Batching

	lock sync.Mutex
}

// NewMemoryStore returns a new Memory.
func NewMemoryStore() *Memory {
	return &Memory{
		dataStore: dssync.MutexWrap(datastore.NewMapDatastore()),
	}
}

func (m *Memory) Datastore() datastore.Datastore {
	return m.dataStore
}

// Batching returns the Memory's datastore.Batching implementation.
func (m *Memory) Batching() datastore.Batching {
	return m.dataStore
}

// Get retrieves the value stored in the Memory under the given key.
func (m *Memory) Get(ctx context.Context, key string) ([]byte, error) {
	m.lock.Lock()
	defer m.lock.Unlock()

	return m.dataStore.Get(ctx, datastore.NewKey(key))
}

// Put stores the given value, keyed by the given string, into the Memory.
func (m *Memory) Put(ctx context.Context, key string, content []byte) error {
	m.lock.Lock()
	defer m.lock.Unlock()

	return m.dataStore.Put(ctx, datastore.NewKey(key), content)
}
