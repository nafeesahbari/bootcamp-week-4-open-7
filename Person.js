class Person {
    constructor(name, type, location) { // properties
        this.name = name; // object of param is passing the param
        this.type = type;
        this.location = location || [0, 0]; // if location not passed, return [0, 0]
    }

    // Method
    introduce() {
        return `Hello my name is ${this.name}`;
    }

    updateX(newX) {
        this.location[0] = newX;
    }

    updateY(newY) {
        this.location[1] = newY;
    }

}

module.exports = Person;