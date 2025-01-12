import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    print('>>> SEQUÊNCIA DE FIBONACCI <<<')
    const NumeroDeTermos = GetNumberIntegerAbove('Informe o número de termos que você deseja visualizar: ',2)
    let SequenciaFibonacci = ''

    let Termo = 2
    let PrimeiroValor = 0, SegundoValor = 1
    while(Termo < NumeroDeTermos){
        Termo++

        SequenciaFibonacci += `[${PrimeiroValor}] [${SegundoValor}] `

        PrimeiroValor =  PrimeiroValor + SegundoValor
        SegundoValor =  SegundoValor + PrimeiroValor

    }

    print(SequenciaFibonacci)
}

main()