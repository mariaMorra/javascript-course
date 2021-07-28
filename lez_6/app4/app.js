// polyfill
if (!Object.create) { //check if Object.create exists, if not create it urself
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // nb any methods inside a object should use this bc we are referencing the object itself ELSE it will try to find it in chain!  
    }
}
//in any browsers this will create an obj
var john = Object.create(person); //crea l'oggetto jhon usando person come prototype!
john.firstname = 'John'; // set le caratteristiche, senza l'ogg è vuoto! (contiene le key:undefined)
john.lastname = 'Doe';
console.log(john);