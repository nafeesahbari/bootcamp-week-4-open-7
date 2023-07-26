const {Person} = require("./Person")

//inheritance the passing down of propertiess , helps us not repeat ourselves

class Player extends Person{
    constructor(name, type, location, weapon){
        super(name,type,location);
        this.weapon = weapon;
    }

    
}

module.exports = Player