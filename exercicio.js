// 1: 

for(let i=1; i<=10; i++){
    console.log(i);}
    
    // 2: 

    for(let i=10; i>=1; i--){
    console.log(i);}
    
    // 3: 

    console.log("\n==== Números pares até 20 ====");
    for(let i=2; i<=20; i= i + 2){
    console.log(i);}
    
    // 4: 

    console.log("\n=== Tabuada do 5 ====");
    for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`);}
    
    // 5:

    console.log("\n=== Soma de 1 a 50 =====");
    let soma = 0;
    for(let i =1; i<=50; i++){
    soma = soma + i;}
    console.log(`A soma é: ${soma}`);
    
    // 6: 

    for(let i=1; i<=8; i++){
    console.log(i);}
    
    // 7: 

    for(let i= 1; i<=15; i= i +2){
    console.log(i);}

    // 8:

    for(let i=1; i<=10; i++){
    console.log(`${i} x 2 ${i*2}`);}

    // 9: 

    for(let i=5; i<=50; i = i+ 5){
    console.log(i);}

    // 10:

    for(let i =1; i<=10; i++){
    console.log(`${i}² = ${i*i}`);}
    if(nota>=6){
    console.log("Aprovado");}
    else{console.log("Reprovado");}
    
    // ==================== ATIVIDADES COM IF ====================
    
    // 11:

    let numero =-1;
    if(numero >0){
    console.log(`${numero} é positivo`);
    }else{
    console.log(`${numero} é negativo`);
    }
    
    
    // 12: 
    
    let idade =17;
    if(idade >=18){
    console.log("Maior de idade");
    }else{
    console.log("Menor de idade");
    }
    
    
    // 13

    let numero = 7;

if (numero % 2 === 0) {
    console.log(numero + " é Par");
} else {
    console.log(numero + " é Ímpar");
}


    
    // 14:

    let nota =7.5;
    if(nota>=6){
    console.log("Aprovado");}
    else{console.log("Reprovado");}
    
    // 15:

    let num1 = 8;
let num2 = 10;

if (num1 > num2) {
    console.log("8 é maior que 10");
} else {
    console.log("8 não é maior que 10");
}


    // 16: 

    let numero = 0;

if (numero === 0) {
    console.log("O número é zero.");
} else {
    console.log("O número não é zero.");
}

    
    // 17: 

let num1 = 10; 
let num2 = 20;


if (num1 > num2) {
  console.log("O maior número é: " + num1);
} else if (num2 > num1) {
  console.log("O maior número é: " + num2);
} else {
  console.log("Os números são iguais.");
}


    // 18: Verifique se uma pessoa de 16 anos pode votar (16+ pode votar)
    


    // 19: 

    let numero = 25;
if (numero >= 10 && numero <= 30) {
    console.log("O número 25 está entre 10 e 30."); // Este será executado
} else {
    console.log("O número 25 não está no intervalo.");
}

    
   // 20: Verifique se "sábado" é dia útil (segunda a sexta)
let dia = "sábado";
if (dia.toLowerCase() === "sábado" || dia.toLowerCase() === "domingo") {
    console.log(dia + " não é dia útil.");
} else {
    console.log(dia + " é dia útil.");
}

// ==================== ATIVIDADES COM FUNÇÕES ====================

// 21: Crie uma função que exiba "Olá, mundo!" quando for chamada
function olaMundo() {
    console.log("Olá, mundo!");
}

// 22: Crie uma função que receba um nome e exiba "Olá, [nome]"
function cumprimentar(nome) {
    console.log("Olá, " + nome);
}

// 23: Crie uma função que receba dois números e retorne a soma
function somar(a, b) {
    return a + b;
}

// 24: Crie uma função que receba um número e retorne o dobro
function dobro(numero) {
    return numero * 2;
}

// 25: Crie uma função que receba um número e diga se ele é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// 26: Crie uma função que receba duas notas e retorne a média
function media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// 27: Crie uma função que receba um número e retorne ele ao quadrado
function quadrado(numero) {
    return numero * numero;
}

// 28: Crie uma função que converta Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 29: Crie uma função que receba três números e retorne a multiplicação
function multiplicarTres(a, b, c) {
    return a * b * c;
}

// 30: Crie uma função que receba um número e retorne o sucessor dele
function sucessor(numero) {
    return numero + 1;
}

////////
let numeros =[1,2,3,4];
console.log("FOR");
for(let i=0; i<numeros.length;i++){
console.log(numeros[1]);
}

console.log("ForEach anonima");
numeros.forEach(function(n){
    if (n %2 ===0){
        console.log(n);
    }
});

console.log("Foreach Arrow");
numeros.forEach(n => console.log(n));


//mostre toos os valores no terminal:


//dados do array:
//let frutas["maçã","banana","uva","abacate"




// 31: Crie um array com os números 10, 20, 30, 40 e exiba todos


// 32: Crie um array com 5 frutas e exiba a primeira fruta


// 33: Adicione o número 50 no final do array [10, 20, 30, 40]

// 34: Remova o último elemento do array [1, 2, 3, 4, 5]

// 35: Exiba quantos elementos tem o array [5, 10, 15, 20]

// 36: Some todos os números do array [2, 4, 6, 8]

// 37: Multiplique cada elemento do array [1, 2, 3, 4] por 2

// 38: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]

// 39: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]

// 40: Exiba o último elemento do array [100, 200, 300, 400, 500]


// ==================== ATIVIDADES COM MATRIZ ====================

// 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda

// 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]

// 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]

// 44: Some todos os números da matriz [[2, 4], [6, 8]]

// 45: Crie uma matriz 3x3 com números de 1 a 9

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]

// 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10

// 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]

// 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]

// 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2


// ==================== ATIVIDADES COM OBJETOS ====================

// 51: Crie um objeto pessoa com nome "Ana" e idade 25

// 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}

// 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}

// 54: Altere a idade do objeto {nome: "João", idade: 18} para 19

// 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}

// 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}

// 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"

// 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]

// 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"

// 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos

usando javascript