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
    myVar=2;
    console.log(myVar);
    var myVar1 = "hi"; // can i see it in b env? NO! a is b's brother, not it's parent!!!! both outher references of theese contexes go on the global level
        // BUT i CAN SEE IT IN THE FOLLOWING FUNCTION !!! BECAUSE I AM THE LEXICAL CONTEXT OF THAT FUNCTION (BECAUSE I, A, DEFINED IT) 
    var myPersonalFunction= function (){
        console.log(myVar1);
    }
    myPersonalFunction(); 
    b1();
}

//calling wt same context
console.log(myVar);
a1();
console.log(myVar);
