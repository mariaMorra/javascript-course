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


//same context functions
function b1(){
    console.log(myVar);
}

function a1(){
    myVar=2;
    console.log(myVar);
    b1();
}

//calling wt same context
var myVar1 = 1;
console.log(myVar);
a1();
console.log(myVar);
