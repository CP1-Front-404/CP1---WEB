function variaveis() {

    let elemento = document.getElementById("q1");

// Exercício 1 

    var valor1; // Declara uma variavel com valor undefined
    console.log(valor1);
    var valor2 = null; //Declara uma variavel com valor vazio/nulo
    console.log(valor2);
    var valor3 = 3; // Declara uma variavel com valor
    console.log(valor3);

    // O texto que será exibido na página
    var texto = `
        valor1 (undefined): ${valor1} <br>
        valor2 (null): ${valor2} <br>
        valor3 (número): ${valor3} `;

    elemento.innerHTML = texto;
}

function comparacoes() {
    let elemento = document.getElementById("q2");

    // Exercício 2
    // ==, != e >= são operadores de comparação que vão comparar se dois valores são ,respectivamente, iguais, diferentes ou se um valor é maior ou igual a outro. 
    var a = 1;
    var b = 1;
    var c = 2;
        console.log(a==b)
    // Se o valor de "a" é IGUAL ao de "b" no console aparecerá true e se não for igual false.
        console.log(a!=b) 
    // Se o valor de "a" é DIFERENTE ao de "b" no console aparecerá true e se não for false.
        console.log(b>=a)
        console.log(c>=a)
    // Se o valor de "a" é maior OU igual ao de "b" no console aparecerá true e se não for false.

// Monta o texto que será exibido na página
     var texto = `
        a == b → ${a == b} <br>
        a != b → ${a != b} <br>
        b >= a → ${b >= a} <br>
        c >= a → ${c >= a} `;

    elemento.innerHTML = texto;
}

function imc(){
   
let altura = parseFloat(prompt("qual a  sua altura?"))
let peso = parseFloat(prompt("qual o seu peso?Em quilos"))
    
function calculoImc (altura , peso){
    let resulatado = (peso/(altura * altura))
    return resulatado
 }
    
function colocarElemento(texto){
     let elemeto = document.getElementById("q3")
    elemeto.innerHTML = texto
}
    
let imc = (calculoImc(altura , peso))
    
switch (true){
    case (imc < 18.5):
        colocarElemento(`o seu imc é de ${imc.toFixed(2)}: Abaixo do peso`)
        break
    case (imc >= 18.5 && imc <= 24.9):
        colocarElemento(`o seu imc é de ${imc.toFixed(2)}: Peso ideal`)
        break
    case (imc >=25 ):
        colocarElemento(`o seu imc é de ${imc.toFixed(2)}: Acima do peso`)
        break
    default:
        colocarElemento("Erro ao colocar dados")
 }
 }


 //exerccicio 4
function resultadoExe4(texto){
    let elemento = document.getElementById("q4")
    elemento.innerHTML = texto
}
function repeticao(){
    let resultado =""

    
    for (let i = 0; i<= 50; i++){
        let virgula = i !== 50 ? "," : "."
        resultado += (`o valor é ${i}!${virgula}`)
    }
   resultadoExe4(resultado)
}
    // exercicio 5
 
 function resultadoExe5(texto){
    let elemento = document.getElementById("q5")
    elemento.innerHTML = texto
}

function login(){
    let nome =prompt("Nome do Usuario")
    let senha =prompt("Senha")
    
    if(nome == "admin" && senha == "1234"){
        resultadoExe5("Login realizado com sucesso!")
    }else{
        resultadoExe5("Usuário ou senha incorretos")
    }
}

//exercicio 6

function resultadoExe6(texto){
    let elemento = document.getElementById("q6")
    elemento.innerHTML = texto
}


function media(){
    let nota1 = parseFloat(prompt("valor da primeira nota:"))
    let nota2 = parseFloat(prompt("valor da segunda nota:"))
    let nota3 = parseFloat(prompt("valor da terceira nota:"))
    let nota4 = parseFloat(prompt("valor da quarta nota:"))
    let nota5 = parseFloat(prompt("valor da quinta nota:"))
    let nota6 = parseFloat(prompt("valor da sexta nota:"))
    let nota7 = parseFloat(prompt("valor da sétima nota:"))
    
    
    let media = (nota1 + nota2 +nota3 + nota4 + nota5 + nota6 + nota7)/7
    
    switch (true) {
        case (media < 6 && media > 0):
            resultadoExe6(`Sua média foi de ${media.toFixed(2)}, reprovado`)
            break
        case (media >= 6 && media <=10):
            resultadoExe6(`Sua média foi de ${media.toFixed(2)}, aprovado`)
            break
        default:
            resultadoExe6("valores incorretos")
    }
}

//exercicio 7
function resultadoExe7(texto){
    let elemento = document.getElementById("q7")
    elemento.innerHTML = texto
}
function informacoes() {
    let nome = prompt("Seu nome")
    let idade = prompt("sua idade")
    let curso = prompt("seu curso")
    let ano = prompt("seu ano no curso(primeiro,segundo...)")

    resultadoExe7(`o seu nome é ${nome}<br>voce tem ${idade} anos <br>está cursando ${curso}<br> e está no ${ano} ano <br>`)
}

//exercicio 8

//texto 1
const textoTec = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos,métodos e técnicas que visam a resolução de problemas."
function resultadoExe8a(texto){
    let elemento = document.getElementById("q8-1")
    elemento.innerHTML = texto;
}
function texto1(){
    textoTec;
    resultadoExe8a("posição em :" + textoTec.indexOf("em"))
}

//texto 2

function resultadoExe8b(texto){
    let elemento = document.getElementById("q8-2")
    elemento.innerHTML = texto;
}

function texto2(){
    textoTec
    resultadoExe8b("posição em :" + textoTec.lastIndexOf("ia"))
}
//texto 3

function resultadoExe8c(texto){
    let elemento = document.getElementById("q8-3")
    elemento.innerHTML = texto;
}

function texto3(){
    textoTec
    resultadoExe8c("posição em :" + textoTec.indexOf("ciência"))
}

//texto 4

function resultadoExe8d(texto){
    let elemento = document.getElementById("q8-4")
    elemento.innerHTML = texto;
}

function texto4(){
    textoTec
    resultadoExe8d("posição em :" + textoTec.indexOf("métodos"))
}
//Exercício 9 

function resultadoExe9(texto){
    let elemento = document.getElementById("q9")
    elemento.innerHTML = texto;

}

function declarando(){
    let p = "10";
    let r = parseFloat(p);
    
    resultadoExe9("let p = '10'<br>let r = parseFloat(p)<br>" + (typeof(r)))

}
