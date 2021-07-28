class Person{

    // i CAN explicitly declare properties
    //firstname; but i dont need to
    //lastname;
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname= lastname;
    }

    greet(){
        return "hi " + this.firstname;
    }
}
//export {Person}; // this makes it explicitly public as a module