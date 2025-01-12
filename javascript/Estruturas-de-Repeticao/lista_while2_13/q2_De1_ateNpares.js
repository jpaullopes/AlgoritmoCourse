import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    //entrada de dados
    const Valor_N = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    let Contador = 0

     //enquanto contador for menor do que o número informado ele continua
    while(Contador < Valor_N){
        Contador++
        //ele só vai escrever os núemro que forem pares
        if(Contador % 2 === 0){
            print(`[${Contador}]`)

        }
    }

}

main()