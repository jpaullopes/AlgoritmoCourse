import { getIntegerNumber, print } from "../utils.js"

function main(){
    //pedir os valores de A e B
    const aValue = getIntegerNumber('Informe o valor de A: ')
    const bValue = getIntegerNumber('Informe o valor de B: ')
    //imprimir a sequencia
    sequenceAToB(aValue,bValue)

}


function sequenceAToB(A,B){
    let sequence = ``
    if(A <= B){
        for(let i = A;i <= B;i++){
            sequence += `[${i}] `
        }
    }
    else{
        for(let i = A;i >= B;i--){
            sequence += `[${i}] `
        }
    }
    print(sequence)
}


main()