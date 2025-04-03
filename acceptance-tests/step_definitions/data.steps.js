const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

const BASE_URL = process.env.APP_URL || 'http://localhost:8080';

let response;
let payload;

Given('a user calls {string} endpoint', function (endpoint) {
    this.endpoint = `${BASE_URL}${endpoint}`;
});

When('payload {string} is sent', async function (payloadStr) {
    payload = JSON.parse(payloadStr);
    try {
        response = await axios.post(this.endpoint, payload);
        errorResponse = null; // Reset error response if request is successful
    } catch (error) {
        errorResponse = error.response; // Capture error response
    }
});

Then('response payload is {string}', function (expectedResponseStr) {
    const expectedResponse = JSON.parse(expectedResponseStr);

    if (errorResponse) {
        assert.strictEqual(errorResponse.status, 400, "Expected a 400 Bad Request error");
        assert.deepStrictEqual(errorResponse.data, expectedResponse);
    } else {
        assert.deepStrictEqual(response.data, expectedResponse);
    }
});
