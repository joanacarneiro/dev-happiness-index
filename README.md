# Software Engineer Happiness Index

This is the repository that tests the influence of different tools and processes in the happiness index of us, software developers! 

</br>

The test is simple --> you need to make a change to this code base. 

Most likelly you never saw this code! 

How much confortable are you doing this, right now, knowing that you will be able to test it and see the changes as you go?

## Prepare Environment

Our team has an aligned set of machines, meaning that every team member has a MacOs with Apple silicon. In case you do not have, please go to section [](#Other Operating Systems orry)

Have a scorecard to evaluate the hapiness index

### Pre-requisites

Download and install [Docker](https://docs.docker.com/desktop/setup/install/mac-install/).

### Start Environment

Execute the below script, to make sure all of the pre-requisites are installed in your machine, if not already. This includes: brew, git, kubectl, kind and skaffold. In case this tools are already installed, then, their installation will be skipped.

```bash
./setup/start.sh
```

## Other Operating Systems (Sorry)

For Windows or Linux Operating Systems, please follow the instructions of each tool to be installed.

| Tool     | Instructions                             |
| -------- | ---------------------------------------- |
| Git      | [Windows](https://git-scm.com/downloads/win) </br> [Linux](https://git-scm.com/downloads/linux) |
| Docker   | [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) </br> [Linux](https://docs.docker.com/desktop/setup/install/linux/) |
| Kubectl  | [Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/) </br> [Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
| Kind     | [All OS](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)            | 
| Skaffold | [All OS](https://skaffold.dev/docs/install/#standalone-binary) | 


### Troubleshooting

#### Docker at MacOs

In case docker command is not recognized, for example getting "zsh: command not found: docker" at some point, then add Docker to your path by editing file ~/.zprofile, and add to it the line:

```bash
# Add Docker Desktop for Mac (docker)
export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin/"
```

And then make sure the changes take effect

```bash
source ~/.zprofile
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
