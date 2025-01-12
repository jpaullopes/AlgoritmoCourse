import { getIntegerNumber,print } from "../utils.js";

function main(){
    //receber o número
    const numeroRecebido = getIntegerNumber('Informe o valor do número: ')

    //realizar o calculo do fatorial
    const numeroCalculado = fatorialCalculator(numeroRecebido)
    //retornar o resultado
    print(`O valor de [${numeroRecebido}!] é [${numeroCalculado}]`)

}

//calcular o fatorial
function fatorialCalculator(number){
    let fatorial = 1
    let count = number
    while(count >= 1){
        fatorial *= count
        count--
    }

    return fatorial
}


main()