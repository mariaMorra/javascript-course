var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) { // how to iterate on an obj
    console.log(prop + ': ' + john[prop]); // need [] instead of . bc prop contains string value == property name  
    
}

console.log("if i want only of JHON alone then use .hasOwnProperty:");
for (var prop in john) { // how to iterate on an obj
    if (john.hasOwnProperty(prop)) {// gets ONLY from jhon
        console.log(prop + ': ' + john[prop]); 
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}

_.extend(john, jane, jim); // underscore fun that makes so that jhon is composed wt the others in list: it adds all properties and methods from the other objs

console.log(john);// we get it all, IT'S NOT A PROTOTYPE CHAIN, JHON HAS ALL OF THEESE THINGS
//demonstration: the loop that gets ONLY jhon's properties SEES THEM
for (var prop in john) { // how to iterate on an obj
    if (john.hasOwnProperty(prop)) {// gets ONLY from jhon
        console.log(prop + ': ' + john[prop]); 
    }
}






