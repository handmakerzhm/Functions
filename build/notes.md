__Note:__ Functions in general is a broad topic with a lot of information with various documentation. I encouraged you to research the topic and look at the variety of resources that are available on the internet.

__Note2:__ These are examples that I've created based off research and my own added input from my creativity. Due to the nature of this subject their will be updates and continuous changes to help me really grasp the concept of functions, as well as examining structure, readability, mistakes, and documentation.

__Note3:__ I'm new in web development in terms of time. Starting at the beginning to now I've journeyed through a significant amount of material as well as encountering plenty of problems along the way.  Just my notes and advice from a novice/~~NOT KNOW IT ALL~~ perspective, maybe it will help others besides myself. Technology is always changing so there is something new to be learned daily. {;-}

# __Functions__ 

---

A function is a block of organized, structured, reusable code that is used to perform a single action. For example alert, console.log, document.write...etc, are built-in functions in your window object/browser.

---

_To reiterate for consistency in the following lists._

 * A function is a piece of code that performs a specific task when called(invoked).

* You must define the scope of the function to access it (globally or locally). This is your preference depending on how you want to use them.

* Functions can be passed through other functions using parameters.The arguments are the values that a function receives when called(invoked).

---

_Example1:_ Function declaration

```
function runIt () {

    alert('This is an example of a function declaration press f12 for the console');
    console.log('This function was called (invoked)');
   }

runIt();

```

---

_Example1-1:_ Function declaration with a return statement.

```
function runIt (num1,num2) {
    return num1 * num2;
}

console.log (runIt(4,8));
// output 32
```

