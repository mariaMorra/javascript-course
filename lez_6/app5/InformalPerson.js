class informalPerson extends Person{
    constructor(firstname, lastname){
        super(firstname, lastname); // set the prop defined in Person using it's constructor
    }
    greet(){
        return "yo " + this.firstname;
    }
}