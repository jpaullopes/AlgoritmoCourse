import { question } from "readline-sync";

export function GetNumber(Mensagem){
    return Number(question(Mensagem))
}


export function GetNumberInteger(Mensagem){
    return parseInt(question(Mensagem))
}


export function print(Texto){
    return console.log(Texto)
}


export function GetNumberIntegerAbove(Mensagem, Min, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumberInteger(Mensagem)

    while(Number < Min){
        print(MensagemInvalida)
        Number = GetNumberInteger(Mensagem)
    }

    return Number
}


export function GetAllNumberAbove(Mensagem, Min, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumber(Mensagem)

    while(Number < Min){
        print(MensagemInvalida)
        Number = GetNumber(Mensagem)
    }

    return Number
}


export function GetNumberIntegerMax(Mensagem, Max, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumberInteger(Mensagem)

    while(Number > Max){
        print(MensagemInvalida)
        Number = GetNumberInteger(Mensagem)
    }

    return Number
}


export function GetAllNumberMax(Mensagem, Max, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumber(Mensagem)

    while(Number > Max){
        print(MensagemInvalida)
        Number = GetNumber(Mensagem)
    }

    return Number
}


export function GetNumberIntegerBetween(Mensagem,Max, Min, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumberInteger(Mensagem)
    
    while(Number < Min || Number > Max){
        print(MensagemInvalida)
        Number = GetNumberInteger(Mensagem)
    }
    return Number
}


export function GetAllNumberBetween(Mensagem,Max, Min, MensagemInvalida = 'Valor inválido!'){
    let Number = GetNumber(Mensagem)

    while(Number < Min || Number > Max){
        print(MensagemInvalida)
        Number = GetNumber(Mensagem)
    }
    
    return Number
}


export function input(Mensagem){
    return question(Mensagem)
}


export function ClearConsole(){
    input('Pressione Enter...')
    console.clear()
}