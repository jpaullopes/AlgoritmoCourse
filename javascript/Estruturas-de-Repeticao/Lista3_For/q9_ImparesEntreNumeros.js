import { GetNumberInteger,print } from "./utils.js"

function main(){
     
    //entrada de dados
    const LimiteInferior = GetNumberInteger('Informe o limite Inferior: ')
    const LimiteSuperior = GetNumberInteger('Informe o limite Superior: ')

    let Impares = ''

    //processamento
    for(let Contador = LimiteInferior; Contador <= LimiteSuperior; Contador++){

        //caso seja imapr
        if(Contador % 2 > 0){
            Impares += `[${Contador}] `
        }
    }

    //exibição dos impares
    print(` >>> OS IMPARES ENTRE ${LimiteInferior} E ${LimiteSuperior} <<<
${Impares}`)

}

main()