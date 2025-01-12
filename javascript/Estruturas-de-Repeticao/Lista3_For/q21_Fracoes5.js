import { GetNumberIntegerAbove, print } from "./utils.js"

function Calcular(){//função que retorna o resultado da soma das frações
    let Somatorio = 0

    for(let Numerador = 1, Denominador = 1; Denominador <= 50; Numerador += 2, Denominador++){
        Somatorio += (Numerador / Denominador)

    }
    return Somatorio

}


function EstruturaFracao(){//função que retorna a estrutura das frações 
    let Estrutura = ''

    for(let Numerador = 1, Denominador = 1; Denominador <= 50; Numerador += 2, Denominador++){
        if(Numerador === 1){
            Estrutura += `(${Numerador} / ${Denominador})` 
        }else{
            Estrutura += ` + (${Numerador} / ${Denominador})` 
        }
    }

    return Estrutura
}


function main(){

    //processamento
    const Somatorio = Calcular()
    const Estrutura = EstruturaFracao()

    //exibição do resultado
    print(`${Estrutura} = [${Somatorio.toFixed(2)}]`)
}


main()