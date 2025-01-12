import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    //entrada dos dados
    const Valor_N = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    let Contador = 0

    //enquanto contador for menor do que o número informado ele continua a informar os números
    while(Contador < Valor_N){
        Contador++
        print(`[${Contador}]`)
    }

}

main()