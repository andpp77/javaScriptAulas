let a1 = {
    nome: "joão",
    idade: 22,
    ra: 12345,
    disciplinas: ["WEB", "ES", "SO"],
    showDisciplinas: function () {
        return `${this.disciplinas}`;
    }
}
console.log(a1.nome);
console.log(a1.showDisciplinas());
console.log(a1.disciplinas[2]);
