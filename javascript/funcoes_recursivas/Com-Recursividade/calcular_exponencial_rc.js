import { print,getIntegerNumber } from "../utils.js"

function main(){
    const base = getIntegerNumber('Informe a base: ')
    const expoente = getIntegerNumber('Informe o expoente: ')
    
    print(`[${base}]^[${expoente}] = ${computarExponencial(base,expoente)}`)

}

function computarExponencial(base,expoente){
    if(expoente === 0){
        return 1
    }
    if(expoente < 0){
        return 1 / computarExponencial(base, -expoente)
    }
    return base * computarExponencial(base,expoente - 1)
}

main()