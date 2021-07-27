//creafunzioni
function makeGreeting(lenguage){
    return function (firstName, lastName){
        if(lenguage === "en"){
            console.log("hello " + firstName + " " + lastName);
        }
        if(lenguage === "es"){
            console.log("hola " + firstName + " " + lastName);
        }
    }
}

//crea oggetti fun
var greetEng = makeGreeting("en"); 
var greetEsp = makeGreeting("es");

//esegui code dei 2 oggetti, THEY HAVE DIFFERENT CONTEXES bc each exec has diffent context
greetEng("john", "buck");
greetEng("jane", "doe");
greetEsp("john", "buck");
greetEsp("jane", "doe");


