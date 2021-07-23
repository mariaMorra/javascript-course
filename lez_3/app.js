//coercion -> engine does a best guess and converts number into string (cause it cannot do the opposite)
let x= 1 + "2";
let y = "2" + 1;
console.log(x);
console.log(y);

//comparison operators
console.log("______________________");
console.log(1 < 2 < 3); // ok as expected
console.log(3 < 2 < 1); // !!! unexpected and unacceptable why it does it?
//BECAUSE OF COERCION!!! ">" AND "<" RETURN A BOOL VALUE 
//  => MEANS THAT I AM ACTUALLY DOING BOOLEAN < NUMBER OR BOOLEAN > NUMER
console.log(1 < 2 && 2 < 3); //correct way to write it
console.log(1 > 2 && 2 > 3); //correct way to write it

// there are functions to coerce some types into another type
console.log("______________________");
console.log(Number(true));
console.log(Number("2"));
console.log(Number(undefined));
console.log(String(1));
console.log(String(false));

//coercion is terrible against == equality and other comparators 
console.log("______________________");
console.log("'2' == 2: " + ("2" == 2)); // !!!
console.log("'2' === 2: " + ("2" === 2));

//coercion to check if the var exists
console.log("______________________");
var a, b=0, c= "hi";
if(a || a === 0){
    console.log("a exists");
}
else{
    console.log("a does not exist");
}
if(b || b === 0){
    console.log("b exists");
}
else{
    console.log("b does not exist");
}
if(c || c === 0){
    console.log("c exists");
}
else{
    console.log("c does not exist");
}