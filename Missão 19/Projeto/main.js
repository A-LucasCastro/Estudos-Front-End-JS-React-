import entradaDados from "readline-sync"

console.log("1- Listar os salários minímos de 2010 à 2020")
console.log("2- Listar o índice IPCA de 2010 à 2020")
console.log("3- Comparação entre o percentual de aumento salarial e o IPCA")
console.log("\n")

let opcaoEscolhida = entradaDados.question("Digite o numero da sua escolha: ")
let opcaoEscolhidaNumber = Number(opcaoEscolhida)

let salarioAnos = [
    {salario: 510,   ano: 2010},
    {salario: 545,   ano: 2011},
    {salario: 622,   ano: 2012},
    {salario: 678,   ano: 2013},
    {salario: 724,   ano: 2014},
    {salario: 788,   ano: 2015},
    {salario: 880,   ano: 2016},
    {salario: 937,   ano: 2017},
    {salario: 954,   ano: 2018},
    {salario: 998,   ano: 2019},
    {salario: 1045,   ano: 2020}
]

let inflacaoIPCA = [
    {inflacao: "5,91%",   ano: 2010},
    {inflacao: "6,50%",   ano: 2011},
    {inflacao: "5,84%",   ano: 2012},
    {inflacao: "5,91%",   ano: 2013},
    {inflacao: "6,41%",   ano: 2014},
    {inflacao: "10,67%",  ano: 2015},
    {inflacao: "6,29%",   ano: 2016},
    {inflacao: "2,95%",   ano: 2017},
    {inflacao: "3,75%",   ano: 2018},
    {inflacao: "4,31%",   ano: 2019},
    {inflacao: "4,52%",   ano: 2020}
]

let padEnd_numeral = 50

switch (opcaoEscolhidaNumber) {
    case 1:
        for (let contador = 0; contador < salarioAnos.length; contador++) {
            let ano = salarioAnos[contador].ano
            let salario = salarioAnos[contador].salario

            console.log("\n");
            console.log("Ano: ".padEnd(padEnd_numeral, ".") + " " + ano);
            console.log("Salário: ".padEnd(padEnd_numeral, ".") + " " + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        }
        break

    case 2:
        for (let contador = 0; contador < inflacaoIPCA.length; contador++) {
            let inflacao = inflacaoIPCA[contador].inflacao
            let ano = inflacaoIPCA[contador].ano

            console.log("\n")
            console.log("Ano: ".padEnd(padEnd_numeral, ".") +  " " + ano)
            console.log("Inflação: ".padEnd(padEnd_numeral, ".") + " " + inflacao)
        }
        break

    case 3:
        for (let contador = 0; contador < salarioAnos.length; contador++) {
            let ano = salarioAnos[contador].ano
            let salario = salarioAnos[contador].salario
            let inflacao = inflacaoIPCA[contador].inflacao
            let percentualCrescimento;
            let crescimentoFormatado;

            if(contador > 0)
            {
                let salarioAnterior = salarioAnos[contador-1].salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%";
            }
            else
            {
                crescimentoFormatado = "-";
            }

            console.log("\n");
            console.log("Ano: ".padEnd(padEnd_numeral, ".") + " " + ano);
            console.log("Salário: ".padEnd(padEnd_numeral, ".") + " " + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
            console.log("Crescimento salarial: ".padEnd(padEnd_numeral, ".") + " " + crescimentoFormatado);
            console.log("Inflação: ".padEnd(padEnd_numeral, ".") + " " + inflacao)
        }
        break

    default:
        console.log("Opção inválida!")
}