import { getIntegerNumber, print } from "../utils.js"

function main(){
    const aValue = getIntegerNumber('Informe o valor minimo[A] da lista: ')
    const bValue = getIntegerNumber('Informe o valor máximo[B] da lista: ')
    const size = getIntegerNumber('Informe o tamanho da lista: ')

    const array = randomArray(aValue,bValue,size,[])

    print(array)
    print(`A soma dos valores da lista é de [${summation(array)}]`)
    
}

function summation(array,n = 0){
    if(n >= array.length){
        return 0
    }
    return array[n] + summation(array,n + 1)
}

function randomArray(min,max,size,array){ 
    if(size === 0){
        return array
    }
    array.push(randomNumber(min,max))
    return randomArray(min,max,size - 1,array)
}
    
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


main()