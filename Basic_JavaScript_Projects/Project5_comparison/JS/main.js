document.write(typeof"Word");
document.write("<br><br>")
document.write(typeof 3);
document.write("<br><br>");
document.write(3E321);
document.write("<br><br>");
document.write(-3E430);
document.write("<br><br>");
document.write(10<2);
document.write("<br><br>");
document.write(10>2);
console.log(2+2);
document.write("<br><br>");
document.write("10"+5);
document.write("<br><br>");
document.write(10==4)
document.write("<br><br>");
document.write(10==10);
document.write("<br><br>");
document.write(10===10);
document.write("<br><br>");
document.write("a"===1);
document.write("<br><br>");
document.write("2"===2);
document.write("<br><br>");
document.write(19===10);
document.write("<br><br>");
document.write(5>2 && 10>4);
document.write("<br><br>");
document.write(5<10 && 10>4);
document.write("<br><br>");
document.write(5>10||10>4);
document.write("<br><br>");
document.write(5>10||10>20);

function notfunc(){
    document.getElementById("Not").innerHTML=!(5>10);
}