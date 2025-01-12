import { GetNumberIntegerAbove, print } from "./utils.js"

//função que retorna a sequencia númerica de acordo com o numero de termos informados
function ComputarSequenciaNumerica(NumeroTermos){
    let DigitoRepeticao = 0
    let SomadorDigito = 1
    let SequenciaNumerica = ''

    for(var Contador = 0 ;Contador < NumeroTermos ;Contador++){

        DigitoRepeticao = DigitoRepeticao + SomadorDigito //o digito anterior é somado com o Somador 
        SomadorDigito += 1

        SequenciaNumerica = SequenciaNumerica + `[${DigitoRepeticao}]`
        
    }

    return SequenciaNumerica 
}


function main(){

    //Entrada de dados, pede o número de sequências que o usuario quer
    const NumeroRepeticoes = GetNumberIntegerAbove('Informe a quantidade de termos da sequência: ',0)

    //processamento de dados
    let SequeciaNumeros = ComputarSequenciaNumerica(NumeroRepeticoes)

    //Exibição da sequencia
    print(SequeciaNumeros)
}


main()