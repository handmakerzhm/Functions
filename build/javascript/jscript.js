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

//Examples1: Function declaration

// function runIt (){
//     console.log('Function has been invoked');
//     console.log('This is an example of a function declaration');
// }

// runIt();

//----------------------------------------
//Example2: Function Expression

// let runIt2 = function (){
//     console.log('Function has been invoked');
//     console.log('This is an example of a function expression');
// }

// runIt2();

//----------------------------------------
//Example3: Arrow Function

// let runIt3 = ()=>{
//     console.log('Function has been invoked');
//     console.log('This is an example of a Arrow function');
// };

// runIt3();

//----------------------------------------
//Example4: Callback Function

// let runIt4 = (function (){
//     console.log('Function has been invoked');
//     console.log('This is an example of a callback function');
// });

// runIt4();
