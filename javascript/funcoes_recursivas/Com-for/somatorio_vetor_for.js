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
    for(let i = 0;i < array.length ;i++){
        sum += array[i]
    }
    return sum
}

function randomArray(min,max,size){
    const list = []
    for (let i = 0;i < size;i++){
        list.push(randomNumber(min,max))
    }
    return list
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


main()