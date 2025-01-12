import { question } from "readline-sync"

export function GetNumber(Mensagem){
    return Number(question(Mensagem))
}

export function print(Texto){
    console.log(Texto)
}

export function GetNumberInteger(Mensagem){
    return parseInt(GetNumber(Mensagem))
}

export function GetNumberIntegerBetween(Mensagem, Minimo, Maximo){

    let Numero = GetNumberInteger(Mensagem)

    while(Numero < Minimo || Numero > Maximo){
        print('Valor inválido!')
        Numero = GetNumberInteger(Mensagem)
    }

    return Numero
}

export function GetNumberIntegerAbove(Mensagem, Minimo){

    let Numero = GetNumberInteger(Mensagem)

    while(Numero < Minimo){
        print('Valor inválido!')
        Numero = GetNumberInteger(Mensagem)
    }

    return Numero
}

