import { GetNumberIntegerAbove, print } from "./utils.js"

function Calcular(N){//função que retorna o resultado da soma das frações
    let somatorio = 0

    for(let i = 1; i <= N; i++){
        if(i % 2 > 0){
            somatorio += (1 / i)
        }else{
            somatorio -= (1 / i)
        }
    }

    return somatorio
}


function EstruturaFracao(N){//função que retorna a estrutura das frações 
    let Estrutura = ''
    
    for(let i = 1; i <= N; i++){
        if(i === 1){
            Estrutura += `(1 / ${i})` 
        }else{
            if(i % 2 > 0){
            Estrutura += ` + (1 / ${i})`
            }else{
            Estrutura += ` - (1 / ${i})`
            }} 
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