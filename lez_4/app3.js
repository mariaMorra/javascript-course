console.log(this); // points to global object wich is the window on a browser

function a(){ // this points to global object still
    console.log(this);
    this.newVariable="hi";
}
a();

var b= function (){ // this points to global object still
    console.log(this);
}
b();
console.log(newVariable); //created in a(), but still present! => is DANGEROUS
// we have 3 exec contexts but all of them have a this that points to the global object

console.log("____________________");
var c = {
    name: "the c object",
    log: function(){
        var self=this; //prima riga di metodo
        this.name = "updated c object";
        console.log(this);

        var setName= function(newName){
            this.name= newName; //points to the window
            self.name= newName;//points to the invocation obj!!!
        }

        setName("updated c obj again");
        //console.log(this); // no effect why? bc HIS this was the GLOBAL OBJECT NOT THE INVOCATION OBJ!!!
        console.log(self);
    } 
}
c.log(); // il this di un metodo di 1 oggetto è l'oggetto stesso!!!


