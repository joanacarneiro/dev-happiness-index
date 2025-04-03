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
    response = await axios.post(this.endpoint, payload);
});

Then('response payload is {string}', function (expectedResponseStr) {
    const expectedResponse = JSON.parse(expectedResponseStr);
    assert.deepStrictEqual(response.data, expectedResponse);
});
