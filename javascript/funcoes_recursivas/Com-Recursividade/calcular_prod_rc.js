import { print,getFloatNumber, getIntegerNumber } from "../utils.js"

function main(){
    const primeiroValor = getFloatNumber('Informe o primeiro valor da multiplicação: ')
    const segundoValor = getIntegerNumber('Informe o segundo valor da multiplicação: ')

    print(`[${primeiroValor}] X [${segundoValor}] = [${multiplication(primeiroValor,segundoValor)}]`)

}

function multiplication(multiplicando,multiplicador){
    if(multiplicador <= 0){
        return 0
    }
    return multiplicando + multiplication(multiplicando,multiplicador - 1)
}


main()