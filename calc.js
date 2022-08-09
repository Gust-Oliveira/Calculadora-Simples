let expressao = document.getElementById("expressao");
let resultado = document.getElementById("resultado");

function exp(n){
    expressao.innerHTML += n
}
function paren1(){
    expressao.innerHTML += "("
}
function paren2(){
    expressao.innerHTML += ")"
}
function limpar(){
    expressao.innerHTML = ""
    resultado.innerHTML = ""
}
function res(){
    let expressaoFinal = document.getElementById("expressao").innerHTML;
    resultado.innerHTML = eval(expressaoFinal)
}