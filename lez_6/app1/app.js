function Person(firstname, lastname) {//constructor FUNCTION (instead of metod)
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

var john = new Person('John', 'Doe'); //use new and constructor function to create the obj
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);