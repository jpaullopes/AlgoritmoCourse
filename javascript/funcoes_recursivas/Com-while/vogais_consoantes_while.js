import { input, print } from "../utils.js"

function main(){

    const frase = upperCase(input('Informe a frase: '))

    print(`O número de vogais dessa frase é de [${contadorVogais(frase)}]`)
    print(`O número de consoantes dessa frase é de [${contadorConsoantes(frase)}]`)

}

function contadorVogais(text){
    let contador = 0
    const vogais = ['A','E','I','O','U']
    let i = 0
    while(i < text.length){
        if (vogais.includes(text[i])){
            contador += 1
        }
        i++
    }
    return contador
}


function contadorConsoantes(text){
    const vogais = ['A','E','I','O','U']
    let contador = 0
    let i = 0
    while(i < text.length){
        if(isCharacter(text[i]) && !(vogais.includes(text[i]))){
            contador += 1
        }
        i++
    }
    return contador
}


function isCharacter(character){
    const characterValue = character.charCodeAt(0)
    return (characterValue >= 65 && characterValue <= 90) || (characterValue >= 97 && characterValue <= 122)
}


function upperCase(text){
    let newText = ''
    let i = 0
    while(i < text.length){
        const characterValue = text[i].charCodeAt(0)
        if(characterValue >= 97 && characterValue <= 122){
            newText += String.fromCharCode(characterValue - 32)
        }else{
            newText += text[i]
        }
        i++
    }
    return newText
}


main()