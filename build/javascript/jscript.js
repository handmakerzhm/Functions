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
//    return name + ' is ' + num1*num2+ ' years old';
// }

// console.log (runIt(4,8, "zilka"));

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


