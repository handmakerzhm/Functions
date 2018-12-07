//------------------------------------------
/*Example1: Constructor function; written as a function expression. It can be written as a function declaration also. Make sure to CAPITALIZE the first let for the constructor name*/

let Character = function(name,specialMove,classification){
    this.name = name;
    this.specialMove = specialMove;
    this.classification = classification;
    this.message = function(){
        console.log(`The character '${this.name}', special move is called ${this.specialMove}. His favorite game is ${this.classification}.`);
    };
    
}

/*Referencing the object constructor function//this. keyword*/
let myCharacter = new Character('Theory Onpoint','the "manuever"','board and holographic chess');
let myCharacter2 = new Character('Man Hand Hand Man',' "quiet movement"','the holographic rubix cube');
let myCharacter3 = new Character('Jist Dexter','the "off the radar"','monopoly');

//Calling the constructor instance and method inside.
// myCharacter.message();
// myCharacter2.message();
// myCharacter3.message();

//Calling the individual name
// console.log(myCharacter.name);
// console.log(myCharacter2.name);
// console.log(myCharacter3.name);
// console.log(myCharacter.classification);