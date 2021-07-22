//calling "before" creation: 
b(); //function is fine because of pre HOISTED
console.log(a); // a is undefined
d();
//console.log(c); // not created anywhere so it' bad

var a ="hello world"; // can be called wt a or window.a

function b(){ // creates a execution context
    console.log("called b!");
}

function d(){
    var e= "hi boss";
    console.log(e + " we are live");
}

//calling after creation:
b();
console.log(a);
d();