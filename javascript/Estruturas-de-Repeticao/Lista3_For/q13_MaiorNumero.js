import { GetNumberInteger,print,GetNumber, GetNumberIntegerAbove } from "./utils.js"

//função que retorna o maior valor dentre dois valores informados
function MaiorValor(Valor1,Valor2){
    if(Valor1 > Valor2){
        return Valor1
    }
    return Valor2
}


function main(){

    //entrada de dados
    const NumeroIteracoes = GetNumberIntegerAbove('Informe o número de iterações: ',0)

    let NumeroMaior = 0

    //até que o número de iterações seja igual ao informado pelo usuario
    for(let Contador = 1 ;Contador <= NumeroIteracoes ;Contador++){

        const ValorInformado = GetNumber('Informe um valor: ')
        //numero maior
        NumeroMaior = MaiorValor(NumeroMaior,ValorInformado)
    }

    print(`O maior valor da lista de Número informada é o [${NumeroMaior}]`)

}


main()