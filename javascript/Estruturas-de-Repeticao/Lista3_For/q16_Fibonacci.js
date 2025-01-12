import { GetNumberIntegerAbove, print } from "./utils.js"

function SequenciaFibonacci(NumeroTermos){//função que retorna a sequencia de fibonacci de acordo com o numero de termos
    let PrimeiroTermo = 0
    let SegundoTermo = 1

    let Sequencia = `[${PrimeiroTermo}] [${SegundoTermo}]`

    for(var i = 2; i < NumeroTermos; i++){

        //adicionei essa verificação de par e imapar para não adicionar de dois em 2 na sequencia fibonacci
        //ex. entrada: 3 ;saida: sequencia contendo 4 termos [0 ,1 ,1 ,2]
        if(i % 2 > 0){
            PrimeiroTermo = SegundoTermo + PrimeiroTermo
            Sequencia += ` [${PrimeiroTermo}]`
            
        }else{
            SegundoTermo = SegundoTermo + PrimeiroTermo
            Sequencia += ` [${SegundoTermo}]`}
        }

    return Sequencia
}


function main(){

    //entrada, numero de termos na sequencia fibonacci
    const NumeroTermos = GetNumberIntegerAbove('Informe a quantidade de termos na Sequência Fibonacci: ',2,'Informe um valor maior que 2!')

    //processamento
    const sequencia = SequenciaFibonacci(NumeroTermos)

    //exibição de dados
    print(`>>>> [ SEQUÊNCIA FIBONACCI ] <<<<`)
    print(sequencia)
}


main()