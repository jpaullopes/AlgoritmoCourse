import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    //entrada dos dados
    const ValorN = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    //processamento de dados e exibição
    for(let i = 1;i <= ValorN;i++){
        print(`[${i}]`)
    }

}


main()