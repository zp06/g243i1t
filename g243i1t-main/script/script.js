function abrir_aba(num){
    for(let i = 1; i <= 5; i++){
        let id_btn = "btn"+i;
        let id_aba = "aba" +i;
        document.getElementById(id_btn).disabled = true;
        document.getElementById(id_aba).style.display = "none";

    }
if(num == "1"){
    document.getElementById("btn1").disabled = true;
    document.getElementById(aba1).style.display = "block";
}    
if(num == "2"){
    document.getElementById("btn2").disabled = true;
    document.getElementById(aba2).style.display = "block";
}
if(num == "3"){
    document.getElementById("btn3").disabled = true;
    document.getElementById(aba3).style.display = "block";
}
if(num == "4"){
    document.getElementById("btn4").disabled = true;
    document.getElementById(aba4).style.display = "block";
}
if(num == "5"){
    document.getElementById("btn5").disabled = true;
    document.getElementById(aba5).style.display = "block";
}
let contador = null;
let inicio = 0;
let fim = 0;
function contagem(){
if(inicio != fim){
    document.getElementById("valor").innerHTML = inicio;
    if(inicio > fim) inicio--;
   else inicio ++;
}
}
function Contar(){
    inicio = document.getElementById("inicio").value;
    fim = document.getElementById("fim").value;
    if(inicio > fim) inicio = Number(inicio) -1;
    else fim = Number(fim) +1;
    contador = setInterval(contagem,1000);
}
}