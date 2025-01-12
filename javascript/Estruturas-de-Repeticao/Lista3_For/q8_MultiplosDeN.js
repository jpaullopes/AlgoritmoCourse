import { GetNumberInteger,print } from "./utils.js"

function main(){
     
    //entrada dos dados
    const ValorN = GetNumberInteger('Informe o valor que você quer ver os múltiplos: ')
    const LimiteInferior = GetNumberInteger('Informe o limite Inferior: ')
    const LimiteSuperior = GetNumberInteger('Informe o limite Superior: ')

    let Multiplos = ''

    //onde o contador inicia -> o limite inferior
    for(let Contador = LimiteInferior;Contador <= LimiteSuperior; Contador++){

        //caso seja multiplo
        if(Contador % ValorN === 0){
           Multiplos += `[${Contador}] `
        }
    }

    //exibição dos multiplos
    print(` >>> OS MULTIPLOS DE [${ValorN}] ENTRE ${LimiteInferior} E ${LimiteSuperior} <<<
${Multiplos}`)
}


main()