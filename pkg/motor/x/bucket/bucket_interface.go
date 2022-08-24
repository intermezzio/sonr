package bucket

import (
	"github.com/sonr-io/sonr/internal/bucket"
	"github.com/sonr-io/sonr/pkg/did"
	bt "github.com/sonr-io/sonr/x/bucket/types"
)

type Bucket interface {
	/*
		Retrieves a piece of content by the given uri
	*/
	GetContentById(id string) (*bucket.BucketContent, error)

	/*
		Access the `items` of the `WhereIs`
	*/
	GetBucketItems() []*bt.BucketItem

	GetBuckets() []*bucket.BucketContent

	GetContent() []*bucket.BucketContent

	/*
		Checks if a given uri for existence in the given bucket
	*/
	ContentExists(id string) bool

	/*
		Creates a did service endpoint for querying a wrapped `WhereIs`
	*/
	CreateBucketServiceEndpoint() did.Service

	/*
		Checks if a given uri is for a bucket
	*/
	IsBucket(id string) bool

	/*
		Checks if a given uri is for an object
	*/
	IsContent(id string) bool

	/*
		Resolves all buckets defined within the current WhereIs by `did`
	*/
	ResolveBuckets(address string) error

	/*
		Resolves all content within the bucket by `cid`
	*/
	ResolveContent() error

	ResolveContentBySchema(did string) ([]*bucket.BucketContent, error)
}
