import { getIntegerNumber,print } from "../utils.js";

function main(){
    //receber o número
    const numeroRecebido = getIntegerNumber('Informe o valor do número: ')

    //realizar o calculo do fatorial
    const numeroCalculado = fatorial(numeroRecebido)
    print(`O valor de [${numeroRecebido}!] é [${numeroCalculado}]`)

}

function fatorial(numero){
    if (numero <= 1){
        return 1
    }
    return numero * fatorial(numero-1)
}

main()