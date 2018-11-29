/*Function for the animated icons: function declaration */
function jsIcon(){
    let link= document.getElementById('icons');    
    link.innerHTML="&#xf3b9;";
    link.style.color ='whitesmoke';               
                    
    setTimeout(function(){                  
        link.innerHTML="&#xf113;";
        link.style.color='rgb(197, 181, 206)';              
    }, 2000);
}

jsIcon();


setInterval(jsIcon,4000);

//----------------------------------------

// Examples1: Function declaration

// function runIt (){
//     alert('This is an example of a function declaration press f12 for the console');
//     console.log('This function was called (invoked)');
//    }
// runIt();

// ----------------------------------------

//Examples1-1: Function declaration with a return statement


// function runIt (num1,num2){
//      return num1 * num2;
// }

// console.log (runIt(4,8,));

//--------------------------------------
//Examples1-2:

// function runIt (num1,num2,name){
//    // return num1 * num2 + name;
//    return name + ' is ' + num1*num2 + ' years old';
// }

// console.log (runIt(4,8, "Zilka"));


//--------------------------------------
/*Examples1-3: This examples shows the variables as the global scope.
Outside the function*/

// let name = "Zilka";
// let num1 = 4;
// let num2 = 8;

// function runIt (){
//     return `${name} is ${num1*num2} years old.`;
// }
 
//  console.log (runIt());

//------------------------------------------------
/*Examples1-4: This examples shows the variables as the local scope.
Inside the function the function*/



// function runIt (){
//     let name = "Zilka";
//     let num1 = 4;
//     let num2 = 8;
//     return `${name} is ${num1*num2} years old.`;
// }
 
//  console.log (runIt());

//----------------------------------------
/*Example1:2:1: 
This examples of passing a single parameter and
argument for the value*/

// let name = function(name){
//     console.log(`Hello ${name}`);
// }

// let runIt = function(param1,name){
//     param1(name);
// }

// console.log(runIt(name,'Zilka'));
 
//--------------------------------------------------

//Example1:2:2

// let runIt = (function(name,num1,num2){
    
//     console.log(`${name} is ${num1*num2} years old.`);
// });

// let runIt2 = (function (param1,name,num1,num2){
    
//     param1(name,num1,num2);
// });

// console.log(runIt2(runIt,'Zilka',4,8));


//----------------------------------------
//Example2: Function Expression

// let runIt2 = function (){
//     alert('This is an example of a function expression press f12 for the console');
//     console.log('This function was called (invoked)');
// }

// runIt2();

//----------------------------------------
//Example3: Arrow Function

// let runIt3 = ()=>{
//     alert('This is an example of a Arrow function press f12 for the console');
//     console.log('This function was called (invoked)');
// };

// runIt3();

//----------------------------------------
//Example4: Callback Function

// let runIt4 = (function (){
//    alert('This is an example of a callback function press f12 for the console');
//     console.log('This function was called (invoked)');
// });

// runIt4();


