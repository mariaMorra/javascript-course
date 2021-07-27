function greet (whattosay){
    return function (name){
        console.log(whattosay + " " + name);
    }
}

//to call the returned fun i can
greet("hi")("tony");
//or i can put result in a var (we can put fun into vars) and than do the work
var sayHi= greet("hi");
sayHi("tony");

console.log("____________________________");
//peculiarity exemple
function buildFunctions(){
    var arr= [];
    for(var i =0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

//they all have i as 3!!! bc it sees the las value that i had
fs[0]();
fs[1]();
fs[2]();

//also if u try and save the value in the child function
function buildFunctions1(){
    var arr= [];
    for(var i =0; i < 3; i++){
        arr.push(
            function(){
                var x=i; // it only knows the function inside the memory RIGHT NOW, not at creation time
                console.log(x);
            }
        )
    }
    return arr;
}

fs = buildFunctions1();

//they all have i as 3!!! bc it sees the las value that i had
fs[0]();
fs[1]();
fs[2]();
//obs you can make iifes then it shold have the expected results, BUT that is a different beast

//"fix" wt iife
console.log("____________________________");
function buildFunctions2(){
    var arr= [];
    for(var i =0; i < 3; i++){
        arr.push(
            (function(){
                console.log(i);
            }())
        );
    }
    return arr;
}

var fsn = buildFunctions2();

for(var i=0; i<3; i++){
    //fsn[i](); // they are NOT functions nomore
    console.log(fsn[i]); // they are 3 UNDEFINED values bc the fun does not return anything
}

//better "fix" wt iife => still returns a function array
console.log("____________________________");
function buildFunctionsIife(){
    var arr= [];
    for(var i =0; i < 3; i++){
        arr.push(
            (function(j){// i make a SEPARATE parent scope wt local i 
                return function(){ // i get returned wt correct i bc i have SEPARATE parent scope from the others in arr
                    console.log(j);
                }
            }(i)) // actually still good i, in memory i still have an i for ach value now =)
        );
    }
    return arr;
}

var fsn = buildFunctionsIife();

for(var i=0; i<3; i++){
    fsn[i](); // they are NOT functions nomore
}

//soluzuiione ufficiale/alternativa: usa kayword let
console.log("____________________________");

function buildFunctionsWtLet(){
    var arr= [];
    for(var i =0; i < 3; i++){
        let j = i; // scope is block!!! => new one for each cycle
        arr.push(
            function(){
                console.log(j);
            }
        );
    }
    return arr;
}

var fsj = buildFunctionsWtLet();

for(var i=0; i<3; i++){
    fsj[i](); // they are NOT functions nomore
}

//calbacks use closure to get their info
console.log("------------------------");
console.log("------------------------");
function sayHiLater(){
    var greeting="howdy";
    setTimeout(
        function(){
            console.log(greeting);
        }
    , 3000);
    
}
sayHiLater();

//function wt callback
console.log("------------------------");
console.log("------------------------");
console.log("------------------------");
function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;
    callback(); // runs a fun i give it
}

tellMeWhenDone(function(){
    console.log("i am done");
});

tellMeWhenDone(function(){
    console.log("all done...");
});