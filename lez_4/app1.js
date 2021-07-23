//create function
function greet(){
    console.log('hi');
}

//add a property
greet.lenguage= "english";
console.log(greet); //returns the code of the function
console.log(greet.lenguage); //gets the property of the function

//conclusion:
//this function has: a name, has a code property and a lenguage property
//code can be run 
//function is an object


//function statement and function expression
console.log("______________________________________");
//called them not lexically correct:
greet1(); //statement f is hoisted it's fine
//anonymousGreet();//expression f is a variable, has no value so we cannot run it
function greet1(){ // is a function statement, does action but nothing is returned
    console.log("hi");
}

var anonymousGreet =  function() { // this is a function expression, it returns the function object itself, it's anonymous bc it dont NEED one, less code is best code 
    console.log("hi");
}

// call them lexically correct: same result, the difference: the second has an address in memory that is inside a var
greet1();
anonymousGreet();

//what if
function log(a){
    console.log(a);
}

function exec(a){
    a();
}

console.log("______________________________________");
log(3);
log("hello");
log({greeting:"howdy"});
//also!!! as they are functions i can do:
log(greet1);
log(anonymousGreet);
log( function(){
    console.log("bhwahwha you'll never know my name");
});

//and i can execute them with:
exec(greet1); // this is a new class of programming: FUNCTIONAL PROGRAMMING
exec(anonymousGreet);
exec(function(){
    console.log("bhwahwha you'll never know my name");
});