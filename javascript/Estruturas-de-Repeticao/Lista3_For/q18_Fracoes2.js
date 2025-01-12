import { GetNumberIntegerAbove, print } from "./utils.js"

function EstruturaFracao(N){//função que retorna a estrutura das frações 
    let Estrutura = ''
    for(let i = 1, sub = 0; i <= N; i++, sub++){
        if(i === 1){
            Estrutura += `(${i} / ${N - sub})` 
        }else{
            Estrutura += ` + (${i} / ${N - sub})` 
        }
    }

    return Estrutura
}


function Calcular(N){//função que retorna o resultado da soma das frações
    let Somatorio = 0

    for(let i = 1, sub = 0; i <= N; i++, sub++){
        Somatorio += (i / (N - sub))
    }

    return Somatorio
}


function main(){

    //Entrada de dados
    const ValorN = GetNumberIntegerAbove('Informe o valor de N: ',1, 'Informe um valor maior igual que 1!')

    //processamento
    const Somatorio = Calcular(ValorN)
    const Estrutura = EstruturaFracao(ValorN)

    //exibição do resultado
    print(`${Estrutura} = [${Somatorio.toFixed(2)}]`)
}


main()