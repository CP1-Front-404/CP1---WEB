// Exercício 1 

var valor1; // Declara uma variavel com valor undefined
console.log(valor1);
var valor2 = null; //Declara uma variavel com valor vazio/nulo
console.log(valor2);
var valor3 = 3; // Declara uma variavel com valor
console.log(valor3);

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
    