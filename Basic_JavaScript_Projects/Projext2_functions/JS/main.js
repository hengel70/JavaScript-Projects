/*
function assign 2 var and uses document.getElementById 
write basic html with a button
use p and assign id and use it on doc.ElmId
*/
function functionA(){
    var var1="This is a green text";
    var var2=var1.fontcolor("green");
    document.getElementById("greenText").innerHTML = var2;
}
function functionB(){
    var sent="I am learning";
    sent+= " a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sent;
}