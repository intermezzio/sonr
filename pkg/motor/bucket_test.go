package motor

import (
	"context"
	"fmt"
	"testing"

	mt "github.com/sonr-io/sonr/pkg/motor/types"
	"github.com/sonr-io/sonr/x/bucket/types"
	"github.com/stretchr/testify/assert"
)

func Test_Buckets(t *testing.T) {
	t.Run("Create Bucket", func(t *testing.T) {
		pskKey := loadKey(fmt.Sprintf("psk%s", ADDR))
		if pskKey == nil || len(pskKey) != 32 {
			t.Errorf("could not load psk key")
			return
		}

		req := mt.LoginRequest{
			Did:       ADDR,
			Password:  "password123",
			AesPskKey: pskKey,
		}

		m := EmptyMotor("test_device")
		_, err := m.Login(req)
		assert.NoError(t, err, "login succeeds")

		createReq := mt.CreateBucketRequest{
			Creator:    ADDR,
			Label:      "my awesome bucket",
			Visibility: types.BucketVisibility_PUBLIC,
			Role:       types.BucketRole_USER,
			Content:    make([]*types.BucketItem, 0),
		}
		b, err := m.CreateBucket(context.Background(), createReq)
		assert.NoError(t, err)
		assert.NotNil(t, b)
	})
}
