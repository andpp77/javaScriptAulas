/*3 tipos de saida 
alert("Saida 1");
console.log("Saida 2");
document.write("saida 3");*/

// variaveis
let nome = "Andisus";
let saudacao = "Boa Noite ";
console.log(saudacao + nome)//concatenação
console.log(`${saudacao} ${nome}`)//concatenação com crazeado
let num1 = 5;
let num2 = 3;
console.log(`A soma dos valores é: ${num1 + num2}`);
// receber valores do usuario
// parseFloat > converter para Float
// parseInt > converter para Inteiro
// Number()
let x = Number(prompt("Digite um numero"));
let y = Number(prompt("Digite um numero"));
//console.log(x + y);

//estrutura de seleção 
if (x > 10) {
    //bloco de comandos se a condiçao for verdadeira
    console.log("é maior");
} else {
    //bloco de comandos se a condiçao for falsa
    console.log("é menor");
}

//Estrutura de repetição
j = 1;
while (j < 10) {
    // se a condição for verdadeira, vai ser repetida ate se tornar falsa
    document.write(j);
    j += 1;
}
//exercicios de fixação
/*1 - utilizando o prompt receba 4 notas e calcule a média e exiba no console se o aluno está aprovado
ou reprovado considere média maior ou igual a 7 para aprovação*/
function media() {
    let nota1 = Number(prompt("Digite a 1° nota:"));
    let nota2 = Number(prompt("Digite a 2° nota:"));
    let nota3 = Number(prompt("Digite a 3° nota:"));
    let nota4 = Number(prompt("Digite a 4° nota:"));
    media = ((nota1 + nota2 + nota3 + nota4) / 4);
    console.log(`A média das notas é: ${media}`);
}
/*2 - receba um numero inteiro qualquer e exiba a tabuada deste numero de 0 a 10, utilizando a estrutura while.*/
function tabuada(){
    tab = 0;
    let numero = Number(prompt("Digite um numero"));
    while (tab < 11) {
        console.log(numero + " x " + tab + " = " + numero * tab);
        tab += 1;
    }
}


/*3 - receba um numero qualquer e exiba se este numero é par ou impar.*/

function parImpar(){
    let num = Number(prompt("Digite um valor"));
    if(num % 2 == 0){
    console.log("par");
    }else{
        console.log("impar");
    }
}
/*4 - Receba um ano qualquer informado pelo usuario e verifique se é
bissexto ou não. sabe-se que:
o resto da divisão por 4 é igual 0  e o resto da divisão por 100 é diferente 
de 0 OU o resto da divisão por 400 é igual 0*/

function bissexto(){
    let ano = Number(prompt("Informe o ano:"))
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
        document.write("O ano é bissexto!");
    }else{
        document.write("O ano não é bissexto!");
    }
}