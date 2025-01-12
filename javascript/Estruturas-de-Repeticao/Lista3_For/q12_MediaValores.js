import { GetNumberInteger,print,GetNumber } from "./utils.js"

function main(){
     
    //entrada dos valores
    const NumeroIterações = GetNumberInteger('Informe o Número de iterações: ')
    let SomaNumeros = 0

    for(let i = 1; i <= NumeroIterações; i++){
        //vai somando
        SomaNumeros += GetNumber('Informe um valor: ')
    }

    //media dos valores
    const Media = SomaNumeros / NumeroIterações

    print(
`SOMA DOS VALORES LIDOS  : [${SomaNumeros}]
MÉDIA DOS VALORES LIDOS : [${Media.toFixed(2)}]`)
}


main()