// tela de agendamentos (mudança de cores nas opções)

var agendamento = document.querySelector(".agend");
var fila = document.querySelector(".fila");
var ped = document.querySelector("#ped")
var clinico = document.querySelector("#cG");
var tria = document.querySelector("#triagem");

function mudarBG1(){
    agendamento.style.backgroundColor = "Gray";
    fila.style.backgroundColor = "#f4f7fc";
    console.log("Certo");
}

function mudarBG2(){
    fila.style.backgroundColor = "Gray";
    agendamento.style.backgroundColor = "#f4f7fc"
    console.log("Certo");
}

function pedi(){
    console.log("Teste")
    ped.style.border = "solid 2px black";
    clinico.style.border = "none";
    tria.style.border = "none";

}
function cG(){
    console.log("Teste")
    clinico.style.border = "solid 2px black";
    ped.style.border = "none";
    tria.style.border = "none";
}
function triagem(){
    console.log("Teste")
    tria.style.border = "solid 2px black";
    clinico.style.border = "none";
    ped.style.border = "none";
}

