var salario
var nome

function perguntarNome(){
    nome = prompt("Qual seu nome?")
    salario = parseInt(prompt("Qual seu salário?")) 
    return nome
    return salario
}
perguntarNome()

function aumentarSalario(){
    if (salario <= 1500) {
        salario = salario * 1.2
    } else if (salario >= 1501 && salario <= 2000) {
        salario = salario * 1.15
    }else if (salario >= 2001 && salario <= 3000) {
        salario = salario * 1.1
    }else if (salario >= 3001) {
        salario = salario * 1.05
    }
    return salario
}
aumentarSalario()
console.log("seu nome é", nome)
console.log("seu salario é", salario)