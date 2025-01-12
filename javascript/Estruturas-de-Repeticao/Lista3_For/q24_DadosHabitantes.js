import {GetAllNumberAbove, GetNumberIntegerAbove, print} from "./utils.js"

function ComputarPercentual(Valor,Total){//função que retorna a porcentagem de um valor
    return (Valor * 100) / Total
}


function main(){

    //entrada de dados, o número de habitantes participantes da pesquisa
    const NumeroHabitantes = GetNumberIntegerAbove('Informe o número de habitantes participantes da pesquisa: ',0)

    let SomatorioSalarios = 0
    let SomatorioFilhos = 0
    let PessoasSalario1k = 0

    //processamento de dados
    for(let i = 0; i < NumeroHabitantes; i++){

        //entrada dos dados de salario e numero de filhos
        const Salario = GetAllNumberAbove('Informe o seu salário[R$]: ',0)
        const NumeroFilhos = GetNumberIntegerAbove('Informe o seu número de filhos: ',0)

        SomatorioSalarios += Salario
        SomatorioFilhos += NumeroFilhos

        if(Salario <= 1000){//caso o salario seja até 1000 reais
            PessoasSalario1k++
        }

    }

    const PercentualPessoas1k = ComputarPercentual(PessoasSalario1k,NumeroHabitantes)
    const MediaSalario = SomatorioSalarios / NumeroHabitantes
    const MediaFilhos = SomatorioFilhos / NumeroHabitantes

    //exibição dos dados em uma tabela
    const Tabela = `
    MÉDIA DO SALÁRIO DA POPULAÇÃO                   : R$ [${MediaSalario.toFixed(1)}]
    MÉDIA DO NÚMERO DE FILHOS                       : [${MediaFilhos.toFixed(1)}]
    PERCENTUAL DE PESSOAS COM SALÁRIO ATÉ MIL REAIS : [${PercentualPessoas1k.toFixed(1)} %] `

    print(Tabela)
}


main()