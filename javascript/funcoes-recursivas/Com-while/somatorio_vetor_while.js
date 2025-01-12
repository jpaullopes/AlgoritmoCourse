import { getIntegerNumber, print } from "../utils.js"

function main(){
    const aValue = getIntegerNumber('Informe o valor minimo[A] da lista: ')
    const bValue = getIntegerNumber('Informe o valor máximo[B] da lista: ')
    const size = getIntegerNumber('Informe o tamanho da lista: ')

    const array = randomArray(aValue,bValue,size)

    print(array)
    print(`A soma dos valores da lista é de [${summation(array)}]`)
    
}

function summation(array){
    let sum = 0
    let i = 0
    while(i < array.length){
        sum += array[i]
        i++
    }
    return sum
}

function randomArray(min,max,size){
    const list = []
    let count = 0
    while(count < size){
        list.push(randomNumber(min,max))
        count++
    }
    return list
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


main()