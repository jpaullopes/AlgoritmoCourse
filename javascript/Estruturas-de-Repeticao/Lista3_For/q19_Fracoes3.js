import { GetNumberIntegerAbove, print } from "./utils.js"

function Calcular(N){//função que retorna o resultado da soma das frações
    let Somatorio = 0

    for(let i = 1, sub = 0; i <= N; i++, sub++){
        if(i % 2 > 0){
            Somatorio += (i / (N - sub))
        }else{
            Somatorio -= ((N - sub) / i)
        }
    }

    return Somatorio

}


function EstruturaFracao(N){//função que retorna a estrutura das frações 
    let Estrutura = ''
    
    for(let i = 1, sub = 0; i <= N; i++, sub++){
        if(i === 1){
            Estrutura += `(${i} / ${N - sub})`     
        }else{
            if(i % 2 > 0){
                Estrutura += ` + (${i} / ${N - sub})`
            }else{
                Estrutura += ` - (${N - sub}/ ${i})`
            }
        }
    }

    return Estrutura
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