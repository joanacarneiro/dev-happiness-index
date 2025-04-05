# Software Engineer Happiness Index

</br>

**Table of Contents**

* [What Is This Repository Intended For?](#what-is-this-repository-intended-for)
* [Your Mission](#your-mission)
* [Local Environment Setup](#local-environment-setup)
* Tasks: [1](#task-1), [2](#task-2), [3](#task-3), [4](#task-4)
* [Other Operating Systems (Sorry)](#other-operating-systems-sorry)
* [Troubleshooting](#troubleshooting)

</br>

## What Is This Repository Intended For?

This is the repository that tests the influence of different tools and processes in the happiness index of us, software developers! How comfortable are we making a change to a code base? How much effort we immediately foresee in order to do it? How many times will we just need to take a break by the simple task of testing it?

</br>

## Your Mission

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

**Install git**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
git clone https://github.com/joanacarneiro/dev-happiness-index.git
```

**Install Docker**

Download and install [Docker](https://docs.docker.com/desktop/setup/install/mac-install/).

### Launch Environment

Execute the below script, to make sure all of the pre-requisites are installed in your machine, if not already. This includes: brew, git, kubectl, kind and skaffold. In case this tools are already installed, then, their installation will be skipped.

```bash
./setup/start.sh
```

### Test Environment

Make a call to the existing endpoint, for example using curl.

```bash
curl -X GET http://127.0.0.1:8080
```

⭐ **Note:** You are now ready to start your tasks! But let's check what happened locally and we can start programming!

</br>

## Task 1

(use main branch)

Adapt current /data endpoint so that it also accepts age as part of the POST payload.
This parameter is and integer and its mandatory.

**Acceptance Criteria**

_Scenario 1_

**Given** a user calls /data endpoint on our application </br>
**When** payload {"name": "Alice", "age": 25} is sent </br>
**Then** response payload is {"message":"Received data for Alice, age 25"}

_Scenario 2_

**Given** a user calls /data endpoint on our application </br>
**When** payload {"name": "Alice"} is sent </br>
**Then** response payload is { "error": "Name and age are required'"}

_Scenario 3_

**Given** a user calls /data endpoint on our application </br>
**When** payload {"age": 25} is sent </br>
**Then** response payload is { "error": "Name and age are required'"}

_Example of curl request for testing_

```bash
curl -X POST http://127.0.0.1:8080/data -H "Content-Type: application/json" -d '{"name": "Alice", "age": 25}'
```

(solution at branch task1-solution)

</br>

## Task 2

Application hello-geek-girls only has 2 replicas on our kubernetes cluster. We need for it to have 3 for High Availability (HA) purposes!

For checking the number of pods run the below command and confirm that 2 pods exist. After the adaptations, run the same command and check there are 3 pods.

```bash
kubectl get pods
```

**Acceptance Criteria**

_Scenario_

**Given** hello-geek-girls application</br>
**When** it is deployed  </br>
**Then** 3 pods are present on the kubernetes cluster

(solution at branch task2-solution)

</br>

⭐ **Note:** Having this setup can also be a quick way to learn a new language or technology and be able to do some quick experiments! This could also have been use for more complex tasks such as creating a k8s secret and consume it from the application.

</br>

## Task 3

How amazing it would be, that we could also automate the scenarios in the acceptance criteria. So that whenever we would do a change, we would see it, but also we could locally run a battery of tests to assure zero regressions.

Well, if its amazing, lets do it then. Lets use [Cucumber](https://cucumber.io/docs/cucumber/api/?lang=javascript) with Gherkin syntax (GIVEN, THEN, WHEN).

Checkout task3 branch

```bash
git checkout task3
```

```bash
npm install
npm run tests 
```

Open the locally generated report dev-happiness-index/acceptance-tests/reports/cucumber_report.html in a browser of your choice to see the results.

Now please add a new acceptance test for scenario 2 of Tasks 1. Verify its successful execution, by running the below command and checking the report.

```bash
npm run tests 
```

(solution at branch task3-solution)

</br>

## Task 4

Lets now add a new test for the verification of the kubernetes replicas.

Checkout task4 branch

```bash
git checkout task4
```

Find the new steps available in file dev-happiness-index/acceptance-tests/step_definitions/replica_check.steps.js.
With that, construct the Gherkin Scenario in file dev-happiness-index/acceptance-tests/features/replica_check.feature.

Test it with

```bash
npm run tests 
```

(solution at branch task4-solution)

</br>

## Task 5

Lets explore the capabilities of skaffold it self. Lets add a profile to it. For that, please checkout branch profiles.

```bash
git checkout profiles
```

You might also want to do some cleanup and start the environment again.

```bash
kind delete clusters geek-girls-cluster
./setup/start.sh
```

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

## Troubleshooting

### Docker at MacOs

In case docker command is not recognized, for example getting "zsh: command not found: docker" at some point, then add Docker to your path by editing file ~/.zprofile, and add to it the line:

```bash
# Add Docker Desktop for Mac (docker)
export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin/"
```

And then make sure the changes take effect

```bash
source ~/.zprofile
```
