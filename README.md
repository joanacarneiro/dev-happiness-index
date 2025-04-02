# Software Engineer Happiness Index

</br>

## What Is This Repository Intended For?

This is the repository that tests the influence of different tools and processes in the happiness index of us, software developers! How comfortable are we making a change to a code base? How much effort we immediately foresee in order to do it? How many times will we just need to take a break by the simple task of testing it?

</br>

## Mission

You just joined the team. The team is pretty confident on your skills and they ask you:

> Please amazing Geek Girl, can you make this two tiny bitty winny changes to this code base?
>
> One is on the logic of the code and another on the kubernetes infrastructure.
>
> Have we mentioned that they are really tiny smally changes?

(How much confidence do you feel right now?)

But your first task if to setup your local environment!

</br>

## Local Environment Setup

Our team has an aligned set of machines, meaning that every team member has a **MacOs with Apple Silicon** so that we can assure a coherent set of machines that we can predict a close set of behaviors, plus being able to spread much more lessons learned and automation that will fit all the team members.

In case you do not have a machine that matches the other team members (**MacOs with Apple Silicon**), please go to section [we are really sorry you have other operating system, and please approach your manager as soon as possible and complain about it](#other-operating-systems-sorry). We will make our best to help.

### Pre-requisites

Download and install [Docker](https://docs.docker.com/desktop/setup/install/mac-install/).

### Launch Environment

Execute the below script, to make sure all of the pre-requisites are installed in your machine, if not already. This includes: brew, git, kubectl, kind and skaffold. In case this tools are already installed, then, their installation will be skipped.

```bash
./setup/start.sh
```

</br>

### Test Environment

Make a call to the existing endpoint, for example using curl.

```bash
curl -X GET http://127.0.0.1:8080
```

⭐ **Note:** You are now ready to start your tasks! But let's check what happened locally and we can start programming!

</br>

## Task 1

Add a new endpoint so that:
- user can call it passing its age and name
- the endpoint should return the information received
- returns an error in case name or age are not passed

**Example code**
```javascript
app.post('/data', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  res.json({ message: `Received data for ${name}, age ${age}` });
});
```

**Example for Testing the changes**

```bash
curl -X POST http://127.0.0.1:8080/data -H "Content-Type: application/json" -d '{"name": "Alice", "age": 25}'
{"message":"Received data for Alice, age 25"}
```

</br>

## Task 2

Application hello-geek-girls only has 2 replicas on our kubernetes cluster. We need for it to have 3!

```bash
kubectl get pods
```

</br>

⭐ **Note:** Having this setup can also be a quick way to learn a new language or technology and be able to do some quick experiments! This could also have been use for more complex tasks such as creating a k8s secret and consume it from the application.

</br>

## Other Operating Systems (Sorry)

### Pre-requisites

Install the below tools, if not already.

| Tool     | Instructions                             |
| -------- | ---------------------------------------- |
| Git      | [Windows](https://git-scm.com/downloads/win) </br> [Linux](https://git-scm.com/downloads/linux) |
| Docker   | [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) </br> [Linux](https://docs.docker.com/desktop/setup/install/linux/) |
| Kubectl  | [Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/) </br> [Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
| Kind     | [All OS](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)            |
| NPM      | [All OS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| Skaffold | [All OS](https://skaffold.dev/docs/install/#standalone-binary) |

### Launch Environment

Create a kind cluster

```bash
kind create cluster --name geek-girls-cluster
```

Install NPM Packages (inside src folder)

```bash
npm install
```

Start Skaffold

```bash
skaffold dev
```

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



```bash

git clone https://github.com/joanacarneiro/dev-happiness-index.git
cd dev-happiness-index/src
npm install
cd ..
skaffold dev

```
