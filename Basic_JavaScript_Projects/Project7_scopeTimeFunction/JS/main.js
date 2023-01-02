//Assignment #39
/*var global=1;
function localfunc(){
    var local=2;
    document.write(global+local);
}
function scopeFun(){
    document.write(global+local);
    console.log(global+local);
}*/
//Assignment #40

function mychoose(){
    if (new Date().getHours() >12){
        document.getElementById("mych").innerHTML="Howdy";
    }else
        document.getElementById("mych").innerHTML="not howdy";
}
//Assignment #41 & 42
function newchoose(){
    if(10==10){
        document.getElementById("mychu").innerHTML="yeah";
    }else
        document.getElementById("mychu").innerHTML="nope";
}
//Assignment #43
function Time_functino(){
    var Time = new Date().getHours;
    var reply;
    if(Time < 12 == Time > 0)
        reply="It is morning time.";
    else if (Time > 12 == Time < 18)
        reply= "It is the afternoon";
    else
        reply="It is evening time";
    document.getElementById("Time_of_day").innerHTML=reply;
}