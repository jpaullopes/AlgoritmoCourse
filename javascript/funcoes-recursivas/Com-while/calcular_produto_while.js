import { getFloatNumber, getIntegerNumber, print} from "../utils.js"

function main(){
    const primeiroValor = getFloatNumber('Informe o primeiro valor da multiplicação: ')
    const segundoValor = getIntegerNumber('Informe o segundo valor da multiplicação: ')

    print(`[${primeiroValor}] X [${segundoValor}] = [${multiplication(primeiroValor,segundoValor)}]`)

}

function multiplication(multiplicando,multiplicador){
    let produto = 0
    
    let count = 0
    while(count < multiplicador){
        produto += multiplicando
        count++
    }
    return produto
}


main()