import { getIntegerNumber,print } from "../utils.js"

function main(){
    const sequenceSize = getIntegerNumber('Informe o tamanho da sequência: ')

    const fibonacci = fibonacciSequence(sequenceSize)

    print(`Sequência de fibonacci: ${fibonacci}`)
}


function fibonacciSequence(size){
    //se for de tamanho 1 ou 2
    if (size == 1){
        return [1]
    }
    else if (size == 2){
        return [1, 1]
    }
    const array = [1, 1]
    //se não for nenhuma das anteriores ele vai iterar até o valor estabelecido anteriormente
    for (let i = 2;i < size;i++){
        let nextSequence = array[i - 1] + array[i - 2]
        array.push(nextSequence)
    }

    return array
}

main()