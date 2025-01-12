import { ClearConsole, GetAllNumberAbove, GetNumberIntegerAbove, input,print } from "./utils.js"


function main(){

    //entradada de dados, numero de funcionarios
    const NumeroDeFuncionarios = GetNumberIntegerAbove('Informe o número de funcionarios: ',0)

    //processamento de dados
    for(let i = 1; i <= NumeroDeFuncionarios; i++){
        print(`FUNCIONÁRIO(A) N° [${i}]`)

        //entradada de dados, codigo do funcionario,horas trabalhadas e numero de dependentes
        const CoodigoFuncionario = input('Informe o código do(a) funcionário(a): ')
        const HorasTrabalhadas = GetAllNumberAbove('Informe o númeoro de horas trabahadas: ',0)
        const NumeroDependentes = GetNumberIntegerAbove('Informe o número de dependentes que você possui: ',0)

        const SalarioBruto = (HorasTrabalhadas * 12) + (NumeroDependentes * 40)
        const DescontoINSS = SalarioBruto * (8.5 / 100)
        const DescontoIR = SalarioBruto * (5 / 100)
        const DescontoSalario = DescontoINSS + DescontoIR
        const SalarioLiquido = SalarioBruto - DescontoSalario

        //exibição dos dados do contaracheque com os dados
        const ContraCheque = `
                >>> [CONTRACHEQUE] <<<
        CÓDIGO DO(A) FUNCIONÁRIO(A)  :   [${CoodigoFuncionario}]
        SALÁRIO BRUTO                : R$[${SalarioBruto.toFixed(2)}]
        DESCONTO DO INSS             : R$[${DescontoINSS.toFixed(2)}]
        DESCONTO DO IMPOSTO DE RENDA : R$[${DescontoIR.toFixed(2)}]
        SALÁRIO LÍQUIDO              : R$[${SalarioLiquido.toFixed(2)}]`

        print(ContraCheque)
        ClearConsole()

    }
}


main()