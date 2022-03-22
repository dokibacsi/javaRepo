window.addEventListener("load", init);


function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElemenetsByClassName(elem);
}

function $(elem){
    document.querySelectorAll(elem);
}

var tomb = [".", ".", ".", ".", ".", ".", ".", ".", ".",]
var lepes = 0;
var jelek = ["X", "O"]

function init() {

    var text = "";

    for (let index = 0; index < 9; index++) {
        text += "<div class='divek'><h3 id='"+index+"'>" + tomb[index] + "</h3></div>";
    }
    
    ID('kockak').innerHTML = text;

    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", kattint)
    }

}

function kattint() {
    var aktIndex = (event.target.id)
    /**MINDEN PÁROS LÉPÉSBEN X-et ÍRJUK, PÁRATLANBAN 0-t! */
    if (lepes%2==0){
        ID(aktIndex).immerHTML="X";
        tomb[aktIndex] = "X";
    $("#info p span")[0].innerHTML = ID("nev1").value
    }
    else{
        ID(aktIndex).immerHTML="O";
        tomb[aktIndex] = "O";
    $("#info p span")[0].innerHTML = ID("nev2").value
    }
    lepes++;
    /**Többé már ne lehessen kattintani */
    ID(aktIndex).removeEventListener("click", kattint)
    ID(aktIndex).style.backgroundColor="lightgray";
}