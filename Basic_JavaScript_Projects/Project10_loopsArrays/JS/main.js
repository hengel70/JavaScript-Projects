//Assignment #50
function Call_Loop(){
    var Digit= "";
    var x=1;
    while (x<=10){
        Digit += "<br>"+ x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

//Assignment #51
var Ins=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Cont="";
var y;
    function for_Loop(){
        for (y=0;y<Ins.length;y++){
            Cont+= Ins[y]+"<br>";
        }
        document.getElementById("ListOfInstruments").innerHTML=Cont;
    }

//Assignment #52
function cat_pics(){
    var cat_pic=[];
    cat_pic [0]="sleeping";
    cat_pic [1]="plaayinh";
    cat_pic [2]="eating";
    cat_pic [3]="purring";
    document.getElementById("cat").innerHTML="In this picture, the cat is "+cat_pic[2]+".";
}

//Assignment #53
function constFunc(){
    const musicInst={type:"guitar",brand:"Fender",color:"black"};
    musicInst.color="blue";
    musicInst.price="$900";
    document.getElementById("constant").innerHTML="The cost of the "+musicInst.type+" was "+musicInst.price;
}
//Assignment #54
var x=32;
document.write(x+"<br>");
{
    let x=33;
    document.write(x+"<br>");
}
document.write(x);
//Assignment #55
let car={
    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"red ",
    description: function(){
        return "The car is a "+ this.year + this.color+ this.make+ this.model;
    }
};
document.getElementById("car").innerHTML=car.description();
