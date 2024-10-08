// Declaração do objeto de fetch, este objeto vai fazer as requisiçoes 
//o que é AJAX?
/*Javascript e XML Assíncrono
utilizamos este objeto para fazer requiziçoes sem a necessidade de
reatualizar a pagina
*/ 
const xhr = new XMLHttpRequest();
// Essa função vai criar uma string para a requisição
function gerarUrl(){
    //Resgatando o conteudo preenchido no html(chama o atributo que tem id = cep)
    let cep = document.getElementById("cep").value;
    //String onde eu vou buscar o meu recurso
    let url = `https://viacep.com.br/ws/${cep}/json`;
    console.log(url);
    return url;
}
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        console.log(resultado);
        printData(resultado);
    }
}
// Pegar o resultado da requisição e exibir no html
function printData(resultado){
    //Formatando a saída HTML com os dados oriundos da requisiçao
    let content =
    ` 
    <b>CEP</b> ${resultado.cep}
    <br><b>Rua</b> ${resultado.logradouro}
    <br><b>Bairro</b> ${resultado.bairro}
    <br><b>UF:</b> ${resultado.uf}
    <br><b>Região:</b> ${resultado.regiao}
    `
    //Adicionando no elemento html que contem o id = resultado
    document.getElementById("resultado").innerHTML = content;
}

function buscarCep(){
    try{
        xhr.open("GET",gerarUrl(),true);
        xhr.send();
    }catch(e){
        console.log(e);
    }
}