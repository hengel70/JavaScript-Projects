/*No need to explain this far, everything is really simple and self explanatory with the naming*/
function addmath(){
    var addition= 2+2;
    document.getElementById("add").innerHTML="2+2= " +addition;
}
function subtractMath(){
    var sub=5-2;
    document.getElementById("sub").innerHTML="5-2= " +sub;
}
function multiMath(){
    var multi=6*8;
    document.getElementById("mul").innerHTML="6*8= "+multi;
}
function divMath(){
    var divi=48/6;
    document.getElementById("divi").innerHTML="48/6= "+divi;
}
function moreMath(){
    var simpMath= (1+2)*10/2-5;
    document.getElementById("complexMath").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+simpMath;
}
function modulusMath(){
    var remin=25%6;
    document.getElementById("reminder").innerHTML="When you divide 25 by 6 you have a remainder of: "+remin;
}
function negationMath(){
    var x=10;
    document.getElementById("unary").innerHTML=-x;
}
function increMath(){
    var x=5;
    x++;
    document.getElementById("incre").innerHTML=x;
}
function decreMath(){
    var x=5;
    x--;
    document.getElementById("decre").innerHTML=x;
}
function randomMath(){
    window.alert(Math.random());
}
function randomMath2(){
    window.alert(Math.random() *100);
}
