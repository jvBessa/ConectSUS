// tela de agendamentos (mudança de cores nas opções)

var agendamento = document.querySelector(".agend");
var fila = document.querySelector(".fila");
var ped = document.querySelector("#ped")
var clinico = document.querySelector("#cG");
var tria = document.querySelector("#triagem");
var outrosBtn = document.querySelector("#outros");
var hospital = "none";

var medico;

var hospitalAtual = document.querySelector("#hospitalAtual");
var drNome = document.querySelector("#drNome");
var hospitalFinal = document.querySelector("#hospitalFinal")

var dataAtend = document.querySelector("#date");
var datas = ['22/06/2022', '24/06/2022', '28/06/2022', '04/07/2022', '10/07/2022'];
var doutores = ['Dr. André', 'Dra. Carla', 'Dr, João', 'Dr. Caio', 'Dra. Laura'];
var dataIndex = 0;
dataAtend.textContent = datas[dataIndex];



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
function outro(){
    console.log("Certo")
    tria.style.border = "none";
    clinico.style.border = "none";
    ped.style.border = "none";
}

function hA(){
    hospital = "Hospital A";
    console.log(hospital);
    sessionStorage.setItem("hospital", hospital);
}
function hB(){
    hospital = "Hospital B";
    console.log(hospital);
    sessionStorage.setItem("hospital", hospital);
}
function hC(){
    hospital = "Hospital C";
    console.log(hospital);
    sessionStorage.setItem("hospital", hospital);
}
function hD(){
    hospital = "Hospital D";
    console.log(hospital);
    sessionStorage.setItem("hospital", hospital);
}
function hE(){
    hospital = "Hospital E";
    console.log(hospital);
    sessionStorage.setItem("hospital", hospital);
}

hospitalAtual.innerText = sessionStorage.getItem("hospital", hospital);

console.log(hospitalAtual);


function up(){
    dataIndex++;
    console.log(datas[dataIndex])
    dataAtend.textContent = datas[dataIndex];
}
function down(){
    dataIndex--;
    console.log(datas[dataIndex])
    dataAtend.textContent = datas[dataIndex];
}

function med1(){
    medico = "Dr. André";
    console.log(medico);
    sessionStorage.setItem("medico", medico)
}
function med2(){
    medico = "Dra. Carla";
    console.log(medico);
    sessionStorage.setItem("medico", medico)
}
function med3(){
    medico = "Dr. João";
    console.log(medico);
    sessionStorage.setItem("medico", medico)
}
function med4(){
    medico = "Dr. Caio";
    console.log(medico);
    sessionStorage.setItem("medico", medico)
}
function med5(){
    medico = "Dra. Laura";
    console.log(medico);
    sessionStorage.setItem("medico", medico)
}
drNome.innerText = sessionStorage.getItem("medico", medico)
console.log("teste")
//pagina de conclusão

hospitalFinal.innerText = hospitalAtual.innerText;