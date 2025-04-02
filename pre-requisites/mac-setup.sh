#!/bin/bash

#####################################################################
# The current script installs the necessary dependencies for MacOs
#####################################################################

## Install package manager
which -s brew
if [[ $? != 0 ]] ; then
    printf -- 'Installing brew.... \n'
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    printf -- 'Brew is already installed.\n'
fi

## Install source control cli
which -s git
if [[ $? != 0 ]] ; then
    printf -- 'Installing git.... \n'
    brew install git
else
    printf -- 'Git is already installed.\n'
fi

## Install kubernetes cli
which -s kubectl
if [[ $? != 0 ]] ; then
    printf -- 'Installing kubectl.... \n'
    brew install kubectl
else
    printf -- 'Kubectl is already installed.\n'
fi

## Install Kubernetes in Docker (KinD)
which -s kind
if [[ $? != 0 ]] ; then
    printf -- 'Installing kind.... \n'
    brew install kind
else
    printf -- 'Kind is already installed.\n'
fi

## Install Hotdeploy tool
which -s skaffold
if [[ $? != 0 ]] ; then
    printf -- 'Installing skaffold.... \n'
    brew install skaffold
else
    printf -- 'Skaffold is already installed.\n'
fi
