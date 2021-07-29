var g = G$("JON", "DOE"); //objective that we want to get

console.log(g);
g.greet().setLang("es").greet(true).log();//.setLang("it"); gives error as should

//how to put it in html using jquery
$("#login").click(function(){ //add listener and function
    var loginGrtr = G$("jon", "doe");
    $("#logindiv").hide();
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});