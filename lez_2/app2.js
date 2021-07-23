//different var context functions
function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar=2;
    console.log(myVar);
    b();
}

//calling wt different var contextes
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

console.log("------------------------------------------------------------------------------");


//same context functions
function b1(){
    console.log(myVar);
    //console.log(myVar1); ->causes error, b cannot see myVar1
}

function a1(){
    function myPersonalFunction(){
        console.log(myVar1);
        console.log(usedByMyPersonalFunction);
        console.log(myVar);
    }
    myVar=2;
    console.log(myVar);
    var myVar1 = "hi"; // can i see it in b env? NO! a is b's brother, not it's parent!!!! both outher references of theese contexes go on the global level
        // BUT i CAN SEE IT IN THE MYPERSONAFUNCTION FUNCTION !!! BECAUSE I AM THE LEXICAL CONTEXT OF THAT FUNCTION (BECAUSE I, A, DEFINED IT) 
    
    myPersonalFunction(); 
    b1();
}

var usedByMyPersonalFunction = "i was not defined in a, who defined myPersonalFunction BUT it CAN see me anyway bc global is still one of it's ancestors (and i was defined before the call to a)";
//calling wt same context
console.log(myVar);
a1();
console.log(myVar);

