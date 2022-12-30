function my_Dictionary(){
    var Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    //document.getElementById("Dictionary").innerHTML=Animal.Breed;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;

}
/*Again, no need to explain much */