const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

let k8s, kc, k8sApi;
let deploymentName;
let namespace;
let replicaCount;

// Initialize Kubernetes API client before any scenario runs
Before(async function () {
    try {
        k8s = await import('@kubernetes/client-node'); // Dynamically import Kubernetes client
        kc = new k8s.KubeConfig();
        
        // Load the kubeconfig from the default location
        kc.loadFromDefault();
        
        // Check if the context is loaded correctly
        const currentContext = kc.getCurrentContext();
        
        // Create the API client for deployments
        k8sApi = kc.makeApiClient(k8s.AppsV1Api);

    } catch (error) {
        throw new Error('Failed to initialize Kubernetes API client');
    }
});


Given('the Kubernetes deployment {string} is running', async function (name) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error("Deployment name must be a non-empty string.");
    }

    deploymentName = name.trim();
    namespace = process.env.K8S_NAMESPACE || 'default';

    try {
        await k8sApi.readNamespacedDeployment({
            name: deploymentName,
            namespace
        });
    } catch (error) {
        throw new Error(`Failed to retrieve deployment "${deploymentName}": ${error.message}`);
    }
});

When('I check the number of replicas', async function () {
    try {
        const res = await k8sApi.readNamespacedDeployment({
            name: deploymentName,
            namespace
        });
        replicaCount = res.status.replicas || 0;
    } catch (error) {
        throw new Error(`Failed to fetch replica count: ${error.message}`);
    }
});

Then('the replica count should be {int}', function (expectedReplicas) {
    assert.strictEqual(
        replicaCount,
        expectedReplicas,
        `Expected ${expectedReplicas} replicas but got ${replicaCount}`
    );
});
