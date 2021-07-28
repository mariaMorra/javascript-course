var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];//it's an object not an array
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better! more info, it is an array

function Person(name) {//fuction constructor
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // it's object??? a bug since, like, forever...

var z = function() { };
console.log(typeof z);

