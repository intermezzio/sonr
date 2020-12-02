package sonr

import (
	"context"
	"errors"
	"fmt"

	"github.com/libp2p/go-libp2p-core/protocol"
	pubsub "github.com/libp2p/go-libp2p-pubsub"
	sf "github.com/sonr-io/core/internal/file"
	"github.com/sonr-io/core/internal/lobby"
	pb "github.com/sonr-io/core/internal/models"
	st "github.com/sonr-io/core/internal/stream"
)

// ^ CurrentFile returns last file in Processed Files ^ //
func (sn *Node) currentFile() *sf.SafeMeta {
	return sn.files[len(sn.files)-1]
}

// ^ SetDiscovery initializes discovery protocols and creates pubsub service ^ //
func (sn *Node) setDiscovery(ctx context.Context, connEvent *pb.ConnectionRequest) error {
	// create a new PubSub service using the GossipSub router
	ps, err := pubsub.NewGossipSub(ctx, sn.host)
	if err != nil {
		return err
	}
	fmt.Println("GossipSub Created")

	// Assign Callbacks from Node to Lobby
	lobbyCallbackRef := lobby.LobbyCallback{
		Refreshed: sn.call.OnRefreshed,
		Error:     sn.Error,
	}

	// Enter Lobby
	if sn.lobby, err = lobby.Enter(ctx, lobbyCallbackRef, ps, sn.host.ID(), sn.Peer, connEvent.Olc); err != nil {
		return err
	}
	fmt.Println("Lobby Entered")
	return nil
}

// ^ SetUser sets node info from connEvent and host ^ //
func (sn *Node) setPeer(connEvent *pb.ConnectionRequest) error {
	// Check for Host
	if sn.host == nil {
		err := errors.New("setPeer: Host has not been called")
		return err
	}

	// Set Peer Info
	sn.Peer = &pb.Peer{
		Id:         sn.host.ID().String(),
		Username:   connEvent.Username,
		Device:     connEvent.Device,
		FirstName:  connEvent.Contact.FirstName,
		ProfilePic: connEvent.Contact.ProfilePic,
	}

	// Assign Peer Info to Stream Handlers
	sn.authStream.Self = sn.Peer
	sn.dataStream.Self = sn.Peer
	sn.dataStream.Host = sn.host

	// Set Directory
	sn.directories = connEvent.Directory
	return nil
}

// ^ SetStreams sets Auth/Data Streams with Handlers ^ //
func (sn *Node) setStreams() {
	// Assign Callbacks from Node to Auth Stream
	sn.authStream.Call = st.AuthCallback{
		Invited:   sn.call.OnInvited,
		Responded: sn.call.OnResponded,
		Error:     sn.Error,
	}

	// Assign Callbacks from Node to Data Stream
	sn.dataStream.Call = st.DataCallback{
		Progressed: sn.call.OnProgress,
		Completed:  sn.call.OnCompleted,
		Error:      sn.Error,
	}

	// Set Handlers
	sn.host.SetStreamHandler(protocol.ID("/sonr/auth"), sn.authStream.HandleStream)
	sn.host.SetStreamHandler(protocol.ID("/sonr/data"), sn.dataStream.HandleStream)
}
