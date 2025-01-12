import { GetNumberInteger,print } from "./utils.js"

function main(){
     
    //entrada de dados
    const Limite_Inferior = GetNumberInteger('Informe o limite Inferior: ')
    const Limite_Superior = GetNumberInteger('Informe o limite Superior: ')

    //onde o contador inicia -> o limite inferior
    let Contador_Max = Limite_Inferior

    while(Contador_Max <= Limite_Superior){

        //caso seja imapr
        if(Contador_Max % 2 > 0){
            print(`[${Contador_Max}]`)
        }

        Contador_Max++
    }

}

main()