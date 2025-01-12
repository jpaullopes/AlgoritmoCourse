import { GetNumberIntegerAbove, print } from "./utils.js"

function EstruturaFracao(N){//função que retorna a estrutura das frações 
    let Estrutura = ''

    for(let i = 1;i <= N; i++){
        if(i === 1){
            Estrutura += `(1 / ${i})` 
        }else{
            Estrutura += ` + (1 / ${i})` 
        }
    }

    return Estrutura
}


function Calcular(N){//função que retorna o resultado da soma das frações
    let Somatorio = 0
    for(let i = 1;i <= N; i++){
        Somatorio += 1 / i 
    }

    return Somatorio
}


function main(){

    //Entrada de dados
    const ValorN = GetNumberIntegerAbove('Informe o valor de N: ',1, 'Informe um valor maior igual que 1!')

    //processamento
    const ValorS = Calcular(ValorN)
    const Estrutura = EstruturaFracao(ValorN)

    //exibição do resultado
    print(`${Estrutura} = [${ValorS.toFixed(2)}]`)

}


main()