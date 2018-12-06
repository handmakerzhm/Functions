//------------------------------------------
//Example1: Constructor function

let Character = function(name,specialMove,classification){
    this.name = name;
    this.specialMove = specialMove;
    this.classification = classification;
    this.message = function(){
        console.log(`The character '${this.name}', special move is called ${this.specialMove}. He likes to play ${this.classification}.`);
    };
}

let myCharacter = new Character('Theory Onpoint','the "manuever"','board and holographic chess');

myCharacter.message();