import { getIntegerNumber, print } from "../utils.js"

function main(){
    const base = getIntegerNumber('Informe a base: ')
    const expoente = getIntegerNumber('Informe o expoente: ')
    
    print(`[${base}]^[${expoente}] = ${computarExponencial(base,expoente)}`)
}


function computarExponencial(numero,expoente){
    let resultado = 1
    if(expoente < 0){
        resultado = 1 / numero
        expoente *= -1
    }

    let count = expoente
    while(count > 0){
        resultado *= numero
        count--
    }
    return resultado
}

main()