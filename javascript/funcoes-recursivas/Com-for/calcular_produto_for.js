import { getFloatNumber, getIntegerNumber, print} from "../utils.js"

function main(){
    const primeiroValor = getFloatNumber('Informe o primeiro valor da multiplicação: ')
    const segundoValor = getIntegerNumber('Informe o segundo valor da multiplicação: ')

    print(`[${primeiroValor}] X [${segundoValor}] = [${multiplication(primeiroValor,segundoValor)}]`)

}

function multiplication(multiplicando,multiplicador){
    let produto = 0
    for(let i = 0;i < multiplicador;i++){
        produto += multiplicando
    }
    return produto
}


main()