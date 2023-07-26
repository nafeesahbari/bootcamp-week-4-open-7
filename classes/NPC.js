const {Person} = require("./Person")

class NPC extends Person{
    constructor(name,type,location){
        super(name,type,location);

        NPC.NPC_COUNT++;
    }
    static NPC_COUNT = 0;

    static tellTime(){
        return `Hello I am an NPC and the time is ${Date.now()}`
    }
}

//static: is used to attach properties on to a class itself not an instance of that class
//important example is Math.floor(), we dont make a Math object, we call it on the Math class itself

module.exports = NPC;