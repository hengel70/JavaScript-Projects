//Assignment #44
function concat(){
    var p1="This"
    var p2="is"
    var p3="a sentence"
    var wholSent= p1.concat(p2,p3);
    document.getElementById("concate").innerHTML(wholSent);
}
//Assignment #45
function slice(){
    var sent="All work and no play makes Johonny a dull boy"
    var secti=sent.slice(27,33);
    document.getElementById("slice").innerHTML=secti;
}
//Assignment #46
function stringMetho(){
    var x=182;
    document.getElementById("numToString").innerHTML=x.toString();
}
//Assignment #47
function preciMeth(){
    var x= 12938.3012987376112;
    document.getElementById("Preci").innerHTML=x.toPrecision(10);
}