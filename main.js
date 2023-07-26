const NPC = require("./classes/NPC.JS");
const {Person,testFunction} = require("./classes/Person");
const Player = require("./classes/player");

function main(){
    //testing ground
    console.log('you are in the main function');

    let person1 = new Person("Bob", "Cleric");
    console.log(person1.name);
    console.log(person1.type);
    console.log(person1.location)

    console.log(person1.introduce())

    console.log(testFunction())

    let person2 = new Person("Ava", "Bard", [1,1])

    person2.updateX(5);
    person2.updateY(3);

    console.log(person2.location)


    console.log("==== Day 2 INHERITANCE ====")

    let player1 = new Player("Bertha", "Cat", [5,5], "Claws")

    console.log(player1.name);
    console.log(player1.weapon);


    console.log("==== STATIC ====")

    let npc1 = new NPC("Bella", "Cat", [7,8]);

    console.log(NPC.NPC_COUNT)

    let npc2 = new NPC("Maevis", "Cat", [10,3]);

    console.log(NPC.NPC_COUNT)
    console.log(NPC.tellTime())

}

main();