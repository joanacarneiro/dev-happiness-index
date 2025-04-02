#!/bin/bash

#####################################################################
# The current script installs the necessary dependencies for MacOs
#####################################################################

## Install package manager
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

## Install source control cli
brew install git

## Install kubernetes cli
brew install kubectl

## Install Kubernetes in Docker (KinD)
brew install kind

## Install Hotdeploy tool
brew install skaffold
