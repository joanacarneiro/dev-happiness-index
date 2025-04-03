const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.endpoint = null;
    }
}

setWorldConstructor(CustomWorld);
