package models

import "time"

// ^ Generate AuthInvite with Contact Payload from Request, User Peer Data and User Contact ^ //
func GetAuthInviteWithContact(req *InviteRequest, p *Peer, c *Contact) AuthInvite {
	// Create Invite
	return AuthInvite{
		IsRemote: false,
		From:     p,
		Payload:  Payload_CONTACT,
		Card: &TransferCard{
			// SQL Properties
			Payload:  Payload_CONTACT,
			Received: int32(time.Now().Unix()),
			Platform: p.Platform,

			// Transfer Properties
			Status: TransferCard_INVITE,

			// Owner Properties
			Username:  p.Profile.Username,
			FirstName: p.Profile.FirstName,
			LastName:  p.Profile.LastName,

			// Data Properties
			Contact: c,
		},
	}
}


// ^ Generate AuthInvite with URL Payload from Request and User Peer Data ^ //
func GetAuthInviteWithURL(req *InviteRequest, p *Peer) AuthInvite {
	// Get URL Data
	urlInfo, err := GetPageInfoFromUrl(req.Url)
	if err != nil {
		urlInfo = &URLLink{
			Link: req.Url,
		}
	}

	// Create Invite
	return AuthInvite{
		IsRemote: req.IsRemote,
		From:     p,
		Payload:  Payload_URL,
		Card: &TransferCard{
			// SQL Properties
			Payload:  Payload_URL,
			Received: int32(time.Now().Unix()),
			Platform: p.Platform,

			// Transfer Properties
			Status: TransferCard_INVITE,

			// Owner Properties
			Username:  p.Profile.Username,
			FirstName: p.Profile.FirstName,
			LastName:  p.Profile.LastName,

			// Data Properties
			Url: urlInfo,
		},
	}
}