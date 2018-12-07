//----------------------------------------------
//Example of (this)

// const scene = {
//     title:'Stage Setting:',
//     stage:['The System','The Protocol','Security'],
//     defineStage (passP){
//         console.log(this.stage,passP)
//     }
// }

// scene.defineStage();

//------------------------------------
//Example1-1: with a forEach loop
/*Note: The this at the end of function 
is references outside the function method*/

// const scene2 = {
//     title:'Stage Setting:',
//     stage:['The System','The Protocol','Security'],
//     defineStage(){
//     this.stage.forEach(function(passP){
//         console.log(`${this.title}`, passP );
//     },this)
// }
// }

// scene2.defineStage();