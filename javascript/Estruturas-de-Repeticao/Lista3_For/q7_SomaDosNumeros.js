import { GetNumberIntegerAbove, print } from "./utils.js"


function main(){

    //entrada dos dados
    const ValorN = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    let SomatorioValores = 0

    //procesamento
    for(let i = 1;i <= ValorN;i++){
        //soma dos valores
        SomatorioValores += i
    }

    print(`A soma dos valores de 1 até ${ValorN} é igual à [${SomatorioValores}].`)

}


main()