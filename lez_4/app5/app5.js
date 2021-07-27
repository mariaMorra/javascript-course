//iife = hoisted and immediatedly called
(function(name){ // crea nuovo contesto di esec, non viene a contatto con greeting di altro file che è salvata in global
    var greeting = "hello";
    console.log(greeting + " " + name);
}("jhon"));

console.log(greeting); //versione su global

//iife può avere accesso a oggetto globale se gli diamo l'oggetto
(function(global, name){ // it's intentional!!!
    var greeting = "hello";
    global.greeting= "hi";
    console.log(greeting + " " + name);
}(window, "jhon"));
console.log(greeting); // this time it's different bc we had access and we changed it

