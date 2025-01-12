import { GetNumberInteger , print} from "./utils.js"

function main(){

    //entrada de dados
    const NumeroInformado = GetNumberInteger('Informe o número desejado: ')

    let MaiorQuadrado = 0
    let NumeroBase= 0

    //processamento
    for(let i = 1; i * i <= NumeroInformado; i++){//o nuemro começa com 1 e vai sendo elevado a 2 até chegar no objetivo
        MaiorQuadrado = i * i
        NumeroBase = i
    }

    //exibição de dados
    print(`O MAIOR QUADRADO MENOR OU IGUAL QUE [${NumeroInformado}] É O [${MaiorQuadrado}](QUADRADO DE ${NumeroBase})`)

}

main()