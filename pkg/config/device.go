package config

import (
	"runtime"
)

func init() {
	if IsDesktop() {
		Init()
	}
}

// Init initializes the device package.
func Init(options ...MotorOption) error {
	opts := defaultMotorOptions()
	for _, opt := range options {
		opt(opts)
	}
	// return opts.Apply()
	return nil
}

// Arch returns the current architecture.
func Arch() string {
	return runtime.GOARCH
}

// IsMobile returns true if the current platform is ANY mobile platform.
func IsMobile() bool {
	return runtime.GOOS == "android" || runtime.GOOS == "ios"
}

// IsDesktop returns true if the current platform is ANY desktop platform.
func IsDesktop() bool {
	return runtime.GOOS == "windows" || runtime.GOOS == "linux" || runtime.GOOS == "darwin"
}

// IsAndroid returns true if the current platform is android.
func IsAndroid() bool {
	return runtime.GOOS == "android"
}

// IsIOS returns true if the current platform is iOS.
func IsIOS() bool {
	return runtime.GOOS == "ios"
}

// IsWindows returns true if the current platform is windows.
func IsWindows() bool {
	return runtime.GOOS == "windows"
}

// IsLinux returns true if the current platform is linux.
func IsLinux() bool {
	return runtime.GOOS == "linux"
}

// IsMacOS returns true if the current platform is macOS.
func IsMacOS() bool {
	return runtime.GOOS == "darwin"
}

// Platform returns formatted GOOS for Text format.
// Returns: ["MacOS", "Windows", "Linux", "Android", "iOS"]
func Platform() string {
	switch runtime.GOOS {
	case "windows":
		return "Windows"
	case "darwin":
		return "MacOS"
	case "linux":
		return "Linux"
	case "android":
		return "Android"
	case "ios":
		return "iOS"
	default:
		return "Unknown"
	}
}
