var person = {
    firstname : "jhon",
    lastname : "doe",
    getFullName: function(){
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function (lang1, lang2){ // fails, "this" is NOT person === no access to method
    console.log("logged " + this.getFullName());
    console.log("arguments " + lang1 + " " + lang2);
    console.log("-___-");
};

var logPersonName = logName.bind(person); //creates copy of logname && bind this of logName to person

logPersonName(); // works because of bind
logPersonName("en"); //idem
logName.call(person, "en", "es"); //uses call to execute wt given this and pars
logName.apply(person, ["en", "es"]);

//function borrowing
console.log("_____________________________")
var person2= {
    firstname: "josh",
    lastname: "buck"
}

console.log(person.getFullName.apply(person2));
//function currying
console.log("_____________________________")
function multiply(a, b){// original, generic function
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2); // gives constraints to copy of function
console.log(multiply(4));
console.log(multiplyByTwo(4));

