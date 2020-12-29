package ui

import (
	"fmt"
	"log"

	"github.com/getlantern/systray"
	"github.com/skratchdot/open-golang/open"
	md "github.com/sonr-io/core/internal/models"
)

type StatusMenu struct {
}

func StartTray() {
	go func() {
		systray.SetTemplateIcon(GetIcon(SystemTray), GetIcon(SystemTray))
		systray.SetTitle("")
		systray.SetTooltip("Sonr")
		mChange := systray.AddMenuItem("Change Me", "Change Me")
		mChecked := systray.AddMenuItemCheckbox("Unchecked", "Check Me", true)
		mEnabled := systray.AddMenuItem("Enabled", "Enabled")
		// Sets the icon of a menu item. Only available on Mac.
		mEnabled.SetTemplateIcon(GetIcon(SystemTray), GetIcon(SystemTray))

		systray.AddMenuItem("Ignored", "Ignored")

		// subMenuBottom := subMenuTop.AddSubMenuItem("Test Notification", "Beep Testing Notifaction")
		// subMenuBottom2 := subMenuTop.AddSubMenuItem("Test Alert", "Beep Testing Alert")
		// subMenuBottom3 := subMenuTop.AddSubMenuItem("Test Alert", "Beep Testing Alert")

		mUrl := systray.AddMenuItem("Open UI", "my home")
		systray.AddSeparator()
		mQuitOrig := systray.AddMenuItem("Quit", "Quit the whole app")
		mQuitOrig.SetTemplateIcon(GetIcon(Close), GetIcon(Close))
		go func() {
			<-mQuitOrig.ClickedCh
			fmt.Println("Requesting quit")
			systray.Quit()
			fmt.Println("Finished quitting")
		}()
		for {
			select {
			case <-mChange.ClickedCh:
				mChange.SetTitle("I've Changed")
			case <-mChecked.ClickedCh:
				if mChecked.Checked() {
					mChecked.Uncheck()
					mChecked.SetTitle("Unchecked")
				} else {
					mChecked.Check()
					mChecked.SetTitle("Checked")
				}
			case <-mEnabled.ClickedCh:
				mEnabled.SetTitle("Disabled")
				mEnabled.Disable()
			case <-mUrl.ClickedCh:
				err := open.Run("https://www.getlantern.org")
				if err != nil {
					log.Fatalln(err)
				}
			}
		}
	}()
}

func RefreshLobby(lob *md.Lobby) {
	if lob.Size > 1 {
		peersMenuItem := systray.AddMenuItem("Peers", "Available local peers")
		for _, p := range lob.Peers {
			// Build Item
			itemTitle := p.FirstName + " | " + p.Device.Platform

			// Add Item to Menu
			item := peersMenuItem.AddSubMenuItem(itemTitle, "Nearby Available Peer")
			item.SetIcon(GetDeviceIcon(p.Device))
		}
	}
}
