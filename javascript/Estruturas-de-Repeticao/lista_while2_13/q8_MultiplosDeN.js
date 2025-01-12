import { GetNumberInteger,print } from "./utils.js"

function main(){
     
    //entrada dos dados
    const Valor_N = GetNumberInteger('Informe o valor que você quer ver os múltiplos: ')
    const Limite_Inferior = GetNumberInteger('Informe o limite Inferior: ')
    const Limite_Superior = GetNumberInteger('Informe o limite Superior: ')

    //onde o contador inicia -> o limite inferior
    let Contador_Max = Limite_Inferior

    while(Contador_Max <= Limite_Superior){

        //caso seja multiplo
        if(Contador_Max % Valor_N === 0){
            print(`[${Contador_Max}]`)
        }

        Contador_Max++
    }

}

main()