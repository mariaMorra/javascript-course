//is still running the code synch => if u put a long exec funct as first thing to do it will still do that first then handle the events in the queue => will not look at queue until exec contexts list is EMPTY

//long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log("finished function");
}

function clickHandler(){
    console.log('click event!');
}

//listen for click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution");
