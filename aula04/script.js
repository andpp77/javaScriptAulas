function decompornum(){
    let numero = Number(prompt("Digite um numero de 0 á 999"))   
    a = parseInt(numero / 100)
    b = parseInt((numero % 100)/10)
    c = parseInt((numero % 100)% 10)
    alert(a)
    alert(b)
    alert(c)
}
function hello(){
    alert("ola mundo") 
}
//a palavra chave FUNCTION originalmente é utilizada para definir uma função em JS
function usandoFor(a,b){
    //As variáveis A e B possuem escopo local, elas só existem dentro do escopo da minha função
    //Inicialização; condição; incremento/decremento
    for(a; a >= 0; a--){
        document.write(`${a} </br>`);
    }
}

function laco(){
    let i =1;
    while (i<=5){
        alert(i)
        i++
    }
}
function usandoWhile(){
    j = 0
    do{
        alert("Eu vou executar?")
        let j = Number(prompt("Digite um novo valor para J"))
    }
    while(j != 10)
}