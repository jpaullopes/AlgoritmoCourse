import { question } from "readline-sync";

export function GetNumber(Texto){
    return Number(question(Texto))
}


export function input(Texto){
    return question(Texto)
}


export function print(Texto){
    return console.log(Texto)
}


export function GetNumberInteger(Texto){
    return parseInt(question(Texto))
}


export function GetNumberBetween(Texto,Min, Max){
    let Numero = GetNumberInteger(Texto)

    while(Numero < Min || Numero > Max){
        print('Valor inválido!')
        Numero =  GetNumberInteger(Texto)

    }

    return Numero
}


export function GetNumberAbove(Texto,Min){
    let Numero = GetNumberInteger(Texto)

    while(Numero < Min){
        print('Valor inválido!')
        Numero =  GetNumberInteger(Texto)

    }

    return Numero
}