import { input, print,upperCase } from "../utils.js"

function main(){

    const frase = upperCase(input('Informe a frase: '))

    print(`O número de vogais dessa frase é de [${contadorVogais(frase)}]`)
    print(`O número de consoantes dessa frase é de [${contadorConsoantes(frase)}]`)

}

function contadorVogais(text,n = 0){
    const vogais = ['A','E','I','O','U']
    if(n >= text.length){
        return 0
    }

    if(vogais.includes(text[n])){
        return contadorVogais(text,n + 1) + 1
    }
    return contadorVogais(text,n + 1)
}


function contadorConsoantes(text,n = 0){
    const vogais = ['A','E','I','O','U']
    if(n >= text.length){
        return 0
    }

    if(isCharacter(text[n]) && !(vogais.includes(text[n]))){
        return contadorConsoantes(text,n + 1) + 1
    }
    return contadorConsoantes(text,n + 1)
}

function isCharacter(character){
    const characterValue = character.charCodeAt(0)
    return (characterValue >= 65 && characterValue <= 90) || (characterValue >= 97 && characterValue <= 122)
}




main()