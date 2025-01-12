import { print,getIntegerNumber } from "../utils.js"

function main(){
    const sequenceSize = getIntegerNumber('Informe o tamanho da sequência: ')
    const listaFibonacci = computarFibonacci(sequenceSize)

    print(`Sequência de fibonacci: ${listaFibonacci}`)
}

function Fibonacci(n){
    if(n <= 0){
        return 0
    }
    else if(n == 1){
        return 1
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

function computarFibonacci(size){
    const array = []
    for(let j = 1;j <= size;j++){
        array.push(Fibonacci(j))
    }
    return array
}

main()