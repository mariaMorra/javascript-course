/*
conceptual aside 1: syntax parsers, execution contexts and lexical environments
-syntax parser= program that read code, determines what it does and checks grammar (compiler/intepretrer)
    they can do "extra stuff"
-lexical environments: exists in programming languages that are such that WHERE you write a part is important
    ->exemple: var or fun can be seen only after they have been reached and read
-exexcution contexts: wrapper to help manage the code that is running 
    base in js is: GLOBAL execution context that creates a global object and a special variable: "this" ->console wt empty js on wich "this" is written will return an object
    in a browser the object "window" is also created (and assigned to "this")
*/

/*
conceptual aside 2: name/value pairs and objects
->name value pair: name which maps to a unique value (which can be a name/value pair as well)
->an object: in JS can be defined as a collection of name/value pairs
*/

/* 
execution context is created in 2 phases:
1)creation phase: creates global object and variable "this" and outer enviroment,
    HOISTING: your code is read 1° time and sets up  MEMORY SPACE FOR BOTH VARIABLES AND FUNCTIONS
        ->VARIABLE EXIST BUT HAVE NO VALUE YET
        ->FUNCTIONS ARE set up completedly
2) phase: gives values to variables and ecc does the rest of it basically

NB do NOT BASE YOUR CODE ON HOISTING
-> MANTIENI NORMALE FORMA (PRIMA LA CREAZIONE DELLE FUNZ ECC POI L'ESECUZIONE) 
*/

/*
conceptual aside 3: undefined
all variables are initially hoisted wt value "undefined"
->special value for js

*/

