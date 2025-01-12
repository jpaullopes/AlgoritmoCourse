import { print, GetNumber, GetAllNumberAbove} from "./utils.js";

function main(){

    //entrada de dados
    const PrimeiroTermo = GetNumber('informe o Primeiro termo da progressão aritmética: ')
    const RazaoDaPrograssao = GetNumber('Informe o valor da razão da progressão: ')
    const LimiteMaximo = GetAllNumberAbove('Informe o limite máximo da prograssão: ',0)

    let ValorTermo = PrimeiroTermo

    //processamento
    for(let Termo = 1;ValorTermo < LimiteMaximo;Termo++){

        //forula da P.A
        ValorTermo = PrimeiroTermo + ((Termo - 1) * RazaoDaPrograssao)
        //exibição do calculo
        print(`${PrimeiroTermo} + (${Termo} - 1) X ${RazaoDaPrograssao} = [${ValorTermo}]`)

    } 

}


main()