function calculoIR(){
    let irenda = parseFloat(prompt("Digite o valor do seu imposto de renda:"));
    if (irenda <= 2112.00 ){
        alert("seu salário é R$" + irenda + " Você está ISENTO do imposto de renda")
    }
    else if (irenda >= 2112.1 || irenda <= 2826.65 ){
        desconto = irenda * 7.5/100
        valorDesconto = irenda - desconto
        alert("seu salário é R$" + irenda + " o valor do desconto do IR é R$ "+ desconto + " Seu salário liquido é R$" + valorDesconto)
    }
    else if(irenda >= 2826.6 || irenda <= 3751,5 ){
        desconto = irenda * 15/100
        valorDesconto = irenda - desconto
        alert("seu salário é R$" + irenda + " o valor do desconto do IR é R$ "+ desconto + " Seu salário liquido é R$" + valorDesconto)
    }
    else if(irenda >= 3751.6 || irenda <= 4664.68){
        desconto = irenda * 22.5/100
        valorDesconto = irenda - desconto
        alert("seu salário é R$" + irenda + " o valor do desconto do IR é R$ "+ desconto + " Seu salário liquido é R$" + valorDesconto)
    }
    else{
        desconto = irenda * 27.5/100
        valorDesconto = irenda - desconto
        alert("seu salário é R$" + irenda + " o valor do desconto do IR é R$ "+ desconto + " Seu salário liquido é R$" + valorDesconto)
    }
}

function calculoMedia(){
    let nota1 = parseFloat(prompt("Digite o valor da sua A1:"))
    let nota2 = parseFloat(prompt("Digite o valor da sua A2:"))
    let freq = Number(prompt("Digite a sua frequencia de 0% ou até 100%: "))
    media = (nota1 + nota2) /2
    if(media >= 7 && media >= 7 && freq <= 70){
        alert("REPROVADO POR FALTA DE FREQUENCIA AS AULAS")
    }
    else if(media >= 7){
        alert("APROVADO " + "sua média é " + media + " sua frequencia é " + freq + "%")
    }
    else if(media <= 7){
        alert("Não atingiu a média necessaria para ser aprovado, Faça a prova AF")
    }
    else{
        alert("Digite os valores corretos")
    }
}

function maxEmin(){
    while (resp = 1){
        let num = Number(prompt("Digite um numero:"))
        let s = String(prompt("Você deseja continuar ?"))
        if(s = "s"){
            cont = cont + 1
        }
        else{
            resp = 0
        }  
    }
}