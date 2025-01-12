import { GetNumberInteger,print,GetNumber, GetNumberIntegerAbove } from "./utils.js"

//função que retorna o maior valor dentre dois valores informados
function MaiorValor(Valor_1,Valor_2){
    if(Valor_1 > Valor_2){
        return Valor_1
    }
    return Valor_2
}


function main(){

    //entrada de dados
    const NumeroDeIteracoes = GetNumberIntegerAbove('Informe o número de iterações: ',0)
    let ValorInformado = 0
    
    let Contador = 0
    let NumeroMaior = 0

    //até que o número de iterações seja igual ao informado pelo usuario
    while(Contador < NumeroDeIteracoes){
        Contador ++
        
        ValorInformado = GetNumber('Informe um valor: ')
        //numero maior
        NumeroMaior = MaiorValor(NumeroMaior,ValorInformado)
    }

    print(`O maior valor da lista de Número informada é o [${NumeroMaior}].`)

}

main()