import { getIntegerNumber, print } from "../utils.js"

function main(){
    //pedir os valores de A e B
    const aValue = getIntegerNumber('Informe o valor de A: ')
    const bValue = getIntegerNumber('Informe o valor de B: ')
    //imprimir a sequencia
    print(sequenceAToB(aValue,bValue))

}


function sequenceAToB(A,B){
    let sequence = ``
    if(A <= B){
        let count = A
        while(count <= B){
            sequence += `[${count}] `
            count++
        }

    }
    else{
        let count = A
        while(count >= B){
            sequence += `[${count}] `
            count--
        }
    }
    return sequence
}


main()