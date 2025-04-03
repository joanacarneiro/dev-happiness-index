Feature: Data API

  Scenario: User sends data payload
    Given a user calls "/data" endpoint
    When payload "{ \"name\": \"Alice\", \"age\": 25 }" is sent
    Then response payload is "{ \"message\": \"Received data for Alice, age 25\" }"

  Scenario: User sends wrong data payload
    Given a user calls "/data" endpoint
    When payload "{ \"name\": \"Alice\"}" is sent
    Then response payload is "{ \"error\": \"Name and age are required\" }"
