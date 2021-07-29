//make code safe: semicolon + immediatedly called function  
;(
//pass to it window and jQuery objs
function(global, $){ 
    var Greetr = function(firstnane, lastname, lenguage){
        //create a function constructor called form here so that we can return the resulting object wtout using key new
        return new Greetr.init(firstnane, lastname, lenguage); // this is what makes init a fun constr
    }
    //vars NON esposte at all ma accessibile ad oggetto greeter
    var supportedLangs = ["en", "es"];
    var greetings={
        en: "hello",
        es: "hola"
    }; 
    var formalGreetings = {
        en: "greetings",
        es: "saludos"
    };
    var logMessages = {
        en: "logged in",
        es: "iniciò sesiòn"
    };

    //le chars possono essere definite sotto, anche se apparentemente chiamate sopra xke deve prima creare greeter
    Greetr.init = function(firstname, lastname, lenguage="en"){
        var self = this;
        // default alla vecchia maniera x first e last, alla nuova maniera per lenguage
        if(firstname===undefined){
            self.firstname="";
        }
        else{
            self.firstname=firstname;
        }
        //easier version:
        self.lastname=lastname || ""; // || op returns the value that can be coherced to true (last if it exists or "" if not)
        //easiest wt new default
        self.lenguage=lenguage;
        self.validate(); // let's check the situation
        //ritorno oggetto creato self/this bc this is a fun constr 
    }
    //creo greetr prototype as an empty obj è 1 scelta estetica, ma qui punteranno tutti i metodi che creo per greetr
    Greetr.prototype={
        fullname: function(){
            return this.firstname + " " + this.lastname;
        },
        validate: function(){//search for position of lenguage in supportedLangs
            if(supportedLangs.indexOf(this.lenguage) === -1){
                throw "invalid lenguage";
            }
        },
        greeting: function(){
            return greetings[this.lenguage] + " " + this.firstname;
        },
        formalGreeting: function(){
            return formalGreetings[this.lenguage] + " " + this.fullname();
        },
        greet: function(formal){
            var msg;
            if(formal){
                msg= this.formalGreeting();
                
            }
            else{
                msg= this.greeting();
            }
            console.log(msg);
            if(console){
                console.log(logMessages[this.lenguage]);
            }
            //this refers to the calling obj at exec time, makes the method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.lenguage] + ": "+ this.fullname());
            }
            return this;
        },
        setLang: function(lang){
            this.lenguage = lang;
            this.validate();
            return this;
        }, 
        HTMLGreeting: function(selector,formal){
            if(!$){
                throw "jq not loaded";
            }
            if(!selector){
                throw "missing jq selector";
            }
            var msg;
            if(formal){ // cannot use greet cause it does NOT return msg but this remember
                msg = this.formalGreeting();
            }
            else{
                msg= this.greeting();
            }
            $(selector).html(msg);
            return this;//chainable
        }

    } 
    //obj created wt constr funct => __proto__  points to greetr.init.prototype => all obj created point to this; 
    //BUT we want it to point to the prototype chain in greeter not in init so:
    Greetr.init.prototype = Greetr.prototype;
    //in greter.prototipe we need to put all methods and eventual variables shared between instance


    //how to attach it to global obj and to have the G$ alias
    global.Greetr = global.G$ = Greetr;
}(window, jQuery)
);