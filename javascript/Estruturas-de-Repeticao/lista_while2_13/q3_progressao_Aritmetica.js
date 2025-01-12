import { print, GetNumber} from "./utils.js";

function main(){

    //entrada de dados
    const PrimeiroTermo = GetNumber('informe o Primeiro termo da progressão aritmética: ')
    const Razao_Da_Prograssao = GetNumber('Informe o valor da razão da progressão: ')
    const LimiteMaximo = GetNumber('Informe o limite máximo da prograssão: ')

    let Termo = 1
    let Valor_Termo = 0

    //enquanto o valor da progressao for menor do que o limite estipulado
    while(Valor_Termo < LimiteMaximo){

        //incrementa a posição do termo
        Termo++
        //mostra o resultado
        print(`${PrimeiroTermo} + (${Termo} - 1) X ${Razao_Da_Prograssao} = [${Valor_Termo}]`)
        //forula da P.A
        Valor_Termo = PrimeiroTermo + ((Termo - 1) * Razao_Da_Prograssao)

    } 

}

main()