//primitive property
var personA = new Object(); //simple way to create an obj, we dont have to use this one necess
personA["firstname"] = "Tony"; //computed member access operator : [] -> to set and access properties
personA["lastname"] = "Alicea";

var firstNameProperty ="firstname";

console.log(personA);
console.log(personA[firstNameProperty]); // i can find property using a var as key instead of string itself
console.log(personA.firstname); //posso usare il nome del campo con . operator

//object property
personA.address = new Object();
personA.address.street= "via cavallotti";
personA.address.number= "34c";
personA.address.city="mestre";

console.log(personA["address"]["street"]);
console.log(personA.address.street);

//object litterals
console.log("___________________");
var person1={
    firstname : "Ann",
    lastname : "Peridos",
    address : {
        street : " via nonnehoidea",
        number : "777",
        city : "pananamama"
    }
};
console.log(person1.firstname + " lives in " + person1.address.city);

//functions and objects
console.log("___________________");
function greet(person){
    console.log("hi " + person.firstname);
}

greet(personA); //valid call
greet({
    firstname: "Bahana", 
    lastname:"Kahana"}
);//valid call

//object to mimic namespaces
console.log("___________________");
var greeting ="hello";
var greeting="hola";
console.log(greeting); //one overwrites the other

var english = { greeting: "hello" };
var spanish = { greeting: "hola" };

//no more conflict !
console.log(english);
console.log(spanish);

//object literal vs JSON
var objectLiteral={
    firstname : "martin",
    isAProgrammer : false
};
//the difference? all keys have quotes
var jsonObjectLiteral = {
    "firstname" : "bard",
    "isAProgrammer" : true
};

//traduzione tra i 2 "formati"
console.log("___________________");
console.log(JSON.stringify(objectLiteral)); // traduce da oggetto a string
console.log(JSON.stringify(jsonObjectLiteral)); // traduce da json a string
var jsonvalue = JSON.parse('{"firstname" : "saklè","isAProgrammer" : false}'); //traduce da string a json
console.log(jsonvalue);