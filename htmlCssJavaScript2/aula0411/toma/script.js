//Exemplo 1 - Alterar o texto de um elemento
function alterarTexto(id, novoTexto){
    document.getElementById(id).innerText = novoTexto;
}
//Exemplo 2 - mudando o estilo dentro do elemento
function mudarestilo(id,propriedade,valor){
    document.getElementById(id).style[propriedade] = valor;
}
//Elemento 3 - interagindo com um campo texto
function exibirMensagem(inputId, outputId){
    let nome = document.getElementById(inputId).value;
    if(nome == ''){
        alert("O nome não pode estar vazio");
    }else{
        document.getElementById(outputId).innerText = "Olá," + nome + "!";
    }
}
//Exemplo 4 - Alternando visibilidade de um elemento
function alternarVisibilidade(id){
    let elemento = document.getElementById(id);
    elemento.style.display = (elemento.style.display === "none") ? "block" : "none";
}