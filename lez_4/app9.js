

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2=[];//i want it to have X*2 x ogni x in arr1
//standard, old way of doing it
for (var i=0; i <arr1.length; i++){
    arr2.push(arr1[i]*2);
}

console.log(arr2);

//the new shiny way wt functional programming
function mapForEach(arr, fun){
    var newArr =[];
    for(var i=0; i < arr.length; i++){
        newArr.push(
            fun(arr[i])
            //console.log(arr[i], fun)
        )
    }
    return newArr;
}

// then to do the same thing the caller code just neeeds to say
var arr3= [];
arr3=mapForEach(arr1, function(item){
    return item * 2;
});
console.log(arr3);
// AND i can pass any other function!
arr4= mapForEach(arr1, function(item){
    return item < 2;
})
console.log(arr4);


//other exemple wt MORE parameters than expected => use bind for finction currying 
console.log("______________________________");
var checkPastLimit = function (limiter, item){
    return item > limiter;
}
var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // bind to get the first (missing) parameter
console.log(arr5);

//OR find how to wrap this into function that takes the limiter
// so we dont need to call bind manually
console.log("______________________________");
var checkpastLimitWtoutbind = function (limiter, item){ //hon item is USELESS HERE
    return (function(limiter, item){
        return item > limiter;
    }).bind(this, limiter)
}

var arr6= mapForEach(arr1, checkpastLimitWtoutbind(1));
console.log(arr6);

//or better:
var checkLimiterSimplified = function (limiter) {
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
};

var arr7 = mapForEach(arr1, checkLimiterSimplified(2));
console.log(arr7);

//esempio di lbreria funzionale: underscore.js
console.log("__________________________underscore.js________________________");
var arr8= _.map(arr1, function(item){return item * 5})
console.log(arr8);