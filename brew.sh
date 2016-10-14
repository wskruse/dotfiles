#!/usr/bin/env bash

# Install command-line tools using Homebrew.

# Make sure we’re using the latest Homebrew.
brew update

# Upgrade any already-installed formulae.
brew upgrade

# install everything in Brewfile
brew bundle

# Remove outdated versions from the cellar.
brew cleanup
