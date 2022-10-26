var salario
var nome
var aumento = ""
var continuar = "s"

function perguntarNome(){
    nome = prompt("Qual seu nome?")
    salario = parseInt(prompt("Qual seu salário?")) 
}

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
}

function desejaContinuar(){
    continuar = prompt("deseja continuar? s ou n")
}

while (continuar == "s") {
    perguntarNome()
    console.log("seu nome é", nome)
    console.log("seu salário é", salario)
    aumentarSalario()
    console.log("seu salario reajustado é", salario)
    console.log("o aumento do seu salário foi de", aumento)
    desejaContinuar()
} 