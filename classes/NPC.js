const Person = require("./Person");

class NPC extends Person {
    static NPC_count = 0;
    
    constructor(name, type, location) {
        super(name, type, location);

        NPC.NPC_count++; // increments
    }

    static tellTime() {
        return `Hello I am an NPC & the time is ${Date.now()}`;
    }
}

module.exports = NPC