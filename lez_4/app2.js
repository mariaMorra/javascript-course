//by value (primitives)
var a = 3; 
var b;
b=a; // 2 copies wt different residences in memory
b= 34; // no interference on a

console.log(a);
console.log(b);

// by reference
var c = {greeting : "hi"};
var d = c;// same memory is shared across
d.greeting ="bye";// both objects mutated 

console.log(c);
console.log(d);

function changeGreeting(obj){
    obj.greeting = "hello";
}

changeGreeting(d); // parameter object still passed by REFERENCE, i got sideeffect on original aliases 

console.log(c);
console.log(d);

//nb tho, i can point to new object, then we dont share anyomre
c= {"a":"b"} //i am creating a new object and pointing to this new address
//assegnazione of existing object vs assign of created obj => modify
console.log(c);
console.log(d);
