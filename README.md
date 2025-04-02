# Software Engineer Happiness Index

## Overview 

This workshop is prepared for 

## Prepare Environment

For the usage of this repository, there are a set of tools that need to be installed as a pre-requisite.
Those tools are described below.

### MacOs

For MacOs environment please execute the below script, to make sure all of the pre-requisites are installed on your machine. This includes: brew, git, docker, kubectl, kind and skaffold.

```bash
./pre-requisites/mac-setup.sh
```


### Windows and Linux

For Windows or Linux Operating Systems, please follow the instructions of each tool to be installed.

| Tool     | Instructions                             |
| -------- | ---------------------------------------- |
| Git      | [Windows](https://git-scm.com/downloads/win) </br> [Linux](https://git-scm.com/downloads/linux) |
| Docker   | [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) </br> [Linux](https://docs.docker.com/desktop/setup/install/linux/) |
| Kubectl  | [Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/) </br> [Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
| Kind     |             | 
| Skaffold | [All OS](https://skaffold.dev/docs/install/#standalone-binary) | 

### Commands for MacOs

```bash



```


## Setup Kubernetes Cluster

```bash
kind create cluster --name geek-girls-cluster
```

## Steps


## Steps


```bash

git clone https://github.com/joanacarneiro/dev-happiness-index.git
cd dev-happiness-index/scr
npm install
cd ..
skaffold dev

```
