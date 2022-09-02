package motor

import (
	"context"
	"fmt"

	mt "github.com/sonr-io/sonr/third_party/types/motor"
	bt "github.com/sonr-io/sonr/x/bucket/types"
)

func ResolveBucket(did string) error {
	if instance == nil {
		return errWalletNotExists
	}

	_, err := instance.GetBucket(did)
	if err != nil {
		return err
	}

	return nil
}

func GetBucketObject(bucketDid, cid string) ([]byte, error) {
	if instance == nil {
		return nil, errWalletNotExists
	}

	bucket, err := instance.GetBucket(bucketDid)
	if err != nil {
		return nil, err
	}

	c, err := bucket.GetContentById(cid)
	if err != nil {
		return nil, err
	}

	return c.Marshal()
}

func GetBucketObjects(bucketDid string) ([]byte, error) {
	if instance == nil {
		return nil, errWalletNotExists
	}

	bucket, err := instance.GetBucket(bucketDid)
	if err != nil {
		return nil, err
	}

	buckets := make([]*bt.BucketContent, 0)
	items := bucket.GetBucketItems()
	for _, item := range items {
		c, err := bucket.GetContentById(item.Uri)
		if err != nil {
			return nil, err
		}

		if c.ContentType != bt.ResourceIdentifier_CID {
			continue
		}
		buckets = append(buckets, c)
	}

	list := &mt.BucketContentList{
		Buckets: buckets,
	}
	return list.Marshal()
}

func ResolveSubBucket(bucketDid, subBucketDid string) error {
	if instance == nil {
		return errWalletNotExists
	}

	bucket, err := instance.GetBucket(bucketDid)
	if err != nil {
		return err
	}

	for _, b := range bucket.GetBuckets() {
		if err = b.ResolveContent(); err != nil {
			return err
		}
		if err = b.ResolveBuckets(); err != nil {
			return err
		}
	}

	return nil
}

func UpdateBucketLabel(bucketDid, label string) error {
	if instance == nil {
		return errWalletNotExists
	}

	_, err := instance.UpdateBucketLabel(context.Background(), bucketDid, label)

	return err
}

func UpdateBucketVisibility(bucketDid string, vis int) error {
	if instance == nil {
		return errWalletNotExists
	}

	_, err := instance.UpdateBucketVisibility(context.Background(), bucketDid, bt.BucketVisibility(vis))

	return err
}

// TODO: refactor this such that it accepts a CID
func AddBucketObject(bucketDid string, obj []byte) error {
	if instance == nil {
		return errWalletNotExists
	}

	newObject := &bt.BucketItem{}
	if err := newObject.Unmarshal(obj); err != nil {
		return err
	}

	b, err := instance.GetBucket(bucketDid)
	if err != nil {
		return err
	}

	if b == nil {
		return fmt.Errorf("could not get bucket with did '%s'", bucketDid)
	}

	items := b.GetBucketItems()
	if items == nil {
		items = make([]*bt.BucketItem, 0)
	}

	newObjects := append(items, newObject)
	_, err = instance.UpdateBucketItems(context.Background(), bucketDid, newObjects)

	return err
}

func RemoveBucketObject(bucketDid, cid string) error {
	if instance == nil {
		return errWalletNotExists
	}

	b, err := instance.GetBucket(bucketDid)
	if err != nil {
		return err
	}

	items := b.GetBucketItems()
	newObjects := make([]*bt.BucketItem, len(items)-1)
	var skip int
	for i, item := range items {
		if item.Uri == cid {
			skip += 1
			continue
		}

		newObjects[i-skip] = item
	}

	_, err = instance.UpdateBucketItems(context.Background(), bucketDid, newObjects)
	return err
}
