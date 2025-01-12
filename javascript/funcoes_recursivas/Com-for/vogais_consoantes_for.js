import { input, print } from "../utils.js"

function main(){

    const frase = upperCase(input('Informe a frase: '))

    print(`O número de vogais dessa frase é de [${contadorVogais(frase)}]`)
    print(`O número de consoantes dessa frase é de [${contadorConsoantes(frase)}]`)

}

function contadorVogais(text){
    let contador = 0
    const vogais = ['A','E','I','O','U']
    for(let i = 0; i < text.length; i++){
        if (vogais.includes(text[i])){
            contador += 1
        }
    }
    return contador
}


function contadorConsoantes(text){
    const vogais = ['A','E','I','O','U']
    let contador = 0
    for(let i = 0;i < text.length; i++){
        if(isCharacter(text[i]) && !(vogais.includes(text[i]))){
            contador += 1
        }
    }
    return contador
}


function isCharacter(character){
    const characterValue = character.charCodeAt(0)
    return (characterValue >= 65 && characterValue <= 90) || (characterValue >= 97 && characterValue <= 122)
}


function upperCase(text){
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


main()