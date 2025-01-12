import { GetNumberInteger,print,GetNumber } from "./utils.js"

function main(){
     
    //entrada dos valores
    const Numero_Iterações = GetNumberInteger('Informe o Número de iterações: ')
    let Soma_Numeros = 0

    let Contador = 0

    while(Contador < Numero_Iterações){
        //vai somando
        Soma_Numeros += GetNumber('Informe um valor: ')
        Contador++
    }

    //media dos valores
    const Media = Soma_Numeros / Numero_Iterações

    print(
`SOMA DOS VALORES LIDOS  : [${Soma_Numeros}]
MÉDIA DOS VALORES LIDOS : [${Media.toFixed(2)}]`)
}

main()