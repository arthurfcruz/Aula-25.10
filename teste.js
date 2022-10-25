var salario
var nome
var aumento = ""

function perguntarNome(){
    nome = prompt("Qual seu nome?")
    salario = parseInt(prompt("Qual seu salário?")) 
    return nome
    return salario
}
perguntarNome()

console.log("seu nome é", nome)
console.log("seu salário é", salario)

function aumentarSalario(){
    if (salario <= 1500) {
        salario = salario * 1.2
        aumento = "20%"
    } else if (salario >= 1501 && salario <= 2000) {
        salario = salario * 1.15
        aumento = "15%"
    }else if (salario >= 2001 && salario <= 3000) {
        salario = salario * 1.1
        aumento = "10%"
    }else if (salario >= 3001) {
        salario = salario * 1.05
        aumento = "5%"
    }
    return salario
}
aumentarSalario()

console.log("seu salario reajustado é", salario)
console.log("o aumento do seu salário foi de", aumento)