import { question } from "readline-sync";

export function input(text){
    return question(text)
}

export function getIntegerNumber(text){
    return parseInt(question(text))
}

export function getFloatNumber(text){
    return parseFloat(question(text))
}

export function print(text){
    return console.log(text)
}

export function upperCase(text){
    let newText = ''
    for(let i = 0;i < text.length;i++){
        const characterValue = text[i].charCodeAt(0)
        if(characterValue >= 97 && characterValue <= 122){
            newText += String.fromCharCode(characterValue - 32)
        }else{
            newText += text[i]
        }
    }
    return newText
}