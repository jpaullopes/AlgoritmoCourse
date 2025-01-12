import { GetNumberInteger, print } from "./utils.js"

//função que retorna um valor booleano quando verifica se um número é primo ou não
function Verificar_Se_Primo(Numero){

    let Contador = 0
    let TotalDivisores = 0

    while(Contador <= Numero){
        Contador++
        //caso o contador seja um divisor do número
        if(Numero % Contador === 0){
            TotalDivisores++
        }
    }

    //se for primo
    if(TotalDivisores <= 2){
        return true
    }

    return false
}

function main(){

    //entrada de dados
    const Limite_Inferior = GetNumberInteger('Informe o limite Inferior: ')
    const Limite_Superior = GetNumberInteger('Informe o limite Superior: ')

    //contador começa do limite inferior
    let Contador_Max = Limite_Inferior

    while(Contador_Max <= Limite_Superior){

        //escreve o número caso ele seja primo
        if(Verificar_Se_Primo(Contador_Max)){
            print(`[${Contador_Max}]`)
        }

        Contador_Max++
    }

}

main()