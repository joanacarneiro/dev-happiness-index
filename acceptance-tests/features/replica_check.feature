Feature: Application Replicas Check

  Scenario: Verify hello-geek-girls app has 3 replicas
    Given the Kubernetes deployment "hello-geek-girls" is running
    When I check the number of replicas
    Then the replica count should be 3
