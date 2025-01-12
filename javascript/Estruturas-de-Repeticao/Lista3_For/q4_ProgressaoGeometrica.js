import { print ,GetNumber } from "./utils.js";

function main(){

    //entrada de dados
    const PrimeiroTermo = GetNumber('informe o Primeiro termo da progressão geométrica: ')
    const RazaoDaPrograssao = GetNumber('Informe o valor da razão da progressão: ')
    const LimiteMaximo = GetNumber('Informe o limite máximo da prograssão: ')

    let ValorTermo = PrimeiroTermo

    //processamento
    for(let Termo = 1;ValorTermo <= LimiteMaximo ;Termo++){

        //exibição do calculo
        print(`${PrimeiroTermo} X ${RazaoDaPrograssao}^(${Termo} - 1) = [${ValorTermo}]`)
        //forula da P.A
        ValorTermo = PrimeiroTermo * (RazaoDaPrograssao ** (Termo))

    } 

}


main()