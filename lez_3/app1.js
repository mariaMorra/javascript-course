function greet(name){
    console.log("hello " + name);
}

function greetOldDef(name){
    name= name || "boss";
    console.log("hello " + name); 
}

function greetWtDefault(name="bitch"){
    console.log("hello " + name);
}

greet("maria");
greet(); //greet undefined
greetOldDef(); // || returns value of first value (right to left) that can be coerced to true
greetWtDefault();