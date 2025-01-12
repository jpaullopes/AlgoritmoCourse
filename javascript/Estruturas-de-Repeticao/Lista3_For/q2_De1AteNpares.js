import { GetNumberIntegerAbove, print } from "./utils.js"

function main(){

    //entrada de dados
    const ValorN = GetNumberIntegerAbove('Informe até que número você quer vizualizar: ',0)

    //processamento e exibição
    for(let i = 1;i <= ValorN;i++){
        //ele só vai escrever os núemro que forem pares
        if(i % 2 === 0){
            print(`[${i}]`)
        }
    }

}

main()