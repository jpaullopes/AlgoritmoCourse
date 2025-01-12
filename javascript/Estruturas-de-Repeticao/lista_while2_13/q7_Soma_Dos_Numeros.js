import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    //entrada dos dados
    const Valor_N = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    let Soma_Dos_Valores = 0
    let Contador = 0

    while(Contador < Valor_N){
        Contador++
        //soma dos valores
        Soma_Dos_Valores += Contador
    }

    print(`A soma dos valores de 1 até ${Valor_N} é igual à [${Soma_Dos_Valores}].`)

}

main()