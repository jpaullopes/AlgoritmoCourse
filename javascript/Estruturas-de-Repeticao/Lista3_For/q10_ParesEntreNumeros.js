import { GetNumberInteger,print } from "./utils.js"


function main(){
     
    //entrada de dados
    const LimiteInferior = GetNumberInteger('Informe o limite Inferior: ')
    const LimiteSuperior = GetNumberInteger('Informe o limite Superior: ')

    let Pares = ''

    //processamento
    for(let Contador = LimiteInferior; Contador <= LimiteSuperior; Contador++){

        //caso seja par
        if(Contador % 2 === 0){
            Pares += `[${Contador}] `
        }
    }

    //exibição dos pares
    print(` >>> OS PARES ENTRE ${LimiteInferior} E ${LimiteSuperior} <<<
${Pares}`)

}


main()