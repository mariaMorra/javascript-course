var arr= [1, 2, 3]; //creazione semplice
arr[0]; // how to get 1 from the array
//array can contain anything
arr[3]="still part of the array";
arr[4]=false;
arr[5]={name: "oggetto", type: "object"}
arr[6]=function (name){
    var greeting = "Hello ";
    console.log(greeting + name);
}

arr[6](arr[5].name); 
