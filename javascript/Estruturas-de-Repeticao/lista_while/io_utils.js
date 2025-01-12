import {question} from 'readline-sync'

export function print(texto){
    console.log(texto)
}

export function get_number(numero){
    return Number(question(numero))
}

export function get_number_inteiro(numero){

    const num = get_number(numero)

    if (num % 1 !== 0 ){
        print('Valor inválido!')
        get_number_inteiro(numero)
    }

    return num
}

export function input(texto){

    return question(texto)
}