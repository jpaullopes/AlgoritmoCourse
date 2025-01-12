import { GetNumber, print, ClearTerminal, Input , GetNumberBetween} from "./utils.js"

function Calculadora(Opcao, Valor_A, Valor_B){

    if(Opcao === 1){
        return Valor_A + Valor_B 
    }
    else if(Opcao === 2){
        return Valor_A - Valor_B
    }
    else if(Opcao === 3){
        return Valor_A * Valor_B
    }
    return Valor_A / Valor_B

}

function main(){

    print('>>> [ CALCULADORA ] <<<')
    const TabelaOpcoes = 
`[1] - ADIÇÃO
[2] - SUBTRAÇÃO
[3] - MULTIPLICAÇÃO
[4] - DEVISÃO`
    
    let Resposta = 'SIM'

    while(Resposta === 'SIM'){
        
        const Numero_1 = GetNumber('Informe o primeiro valor: ')
        const Numero_2 = GetNumber('Informe o segundo valor: ')
        
        print(TabelaOpcoes)
        const Opcao = GetNumberBetween('Informe sua opção: ',1 ,4)
        
        const Resultado = Calculadora(Opcao, Numero_1, Numero_2)
        
        print(`O resultado da operação é [${Resultado}]`)
        Resposta = Input('Deseja continuar[SIM/NAO]: ').toUpperCase()

        ClearTerminal()
    }

}

main()