import { print ,GetNumber } from "./utils.js";

function main(){

    //entrada de dados
    const PrimeiroTermo = GetNumber('informe o Primeiro termo da progressão geométrica: ')
    const Razao_Da_Prograssao = GetNumber('Informe o valor da razão da progressão: ')
    const LimiteMaximo = GetNumber('Informe o limite máximo da prograssão: ')

    //enquanto o valor da progressao for menor do que o limite estipulado
    let Termo = 1
    let Valor_Termo = PrimeiroTermo

    while(Valor_Termo < LimiteMaximo){

        //mostra o resultado
        print(`${PrimeiroTermo} X ${Razao_Da_Prograssao}^(${Termo} - 1) = [${Valor_Termo}]`)
        //forula da P.A
        Valor_Termo = PrimeiroTermo * (Razao_Da_Prograssao ** (Termo - 1))
        //incrementa a posição do termo
        Termo++

    } 

}

main()