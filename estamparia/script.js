function laco() {
    let i = 1;
    while (i <= 5) {
        alert(i)
        i++
    }
}
function intervalo() {
    let i = Number(prompt("Digite o 1° numero:"))
    let f = Number(prompt("Digite o 2° numero:"))
    while (i <= f)
        document.write(i + f)
}
let a1 = {
    nome: "joão",
    idade: 22,
    ra: 12345,
    disciplinas: ["WEB", "ES"],
    showDisciplinas: function () {
        return `${this.disciplinas}`;
    }

}
