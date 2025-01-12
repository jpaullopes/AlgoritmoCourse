import { GetNumberInteger, print } from "./utils.js"

//função que retorna um valor booleano quando verifica se um número é primo ou não
function VerificarPrimo(Numero){
    let TotalDivisores = 0

    for(let i = 1 ;i <= Numero; i++){
        //caso o i seja um divisor do número
        if(Numero % i === 0){
            TotalDivisores++
        }
    }
    //se for primo
    return TotalDivisores <= 2

}


function ListarPrimos(LimiteInferior,LimiteSuperior){//função que vai retornar os primos 
    let Primos = ''

    for(let Contador = LimiteInferior ;Contador <= LimiteSuperior; Contador++){
        //caso o numero seja primo
        if(VerificarPrimo(Contador)){

            Primos +=`[${Contador}] `
        }
    }

    return Primos
}


function main(){

    //entrada de dados
    const LimiteInferior = GetNumberInteger('Informe o limite Inferior: ')
    const LimiteSuperior = GetNumberInteger('Informe o limite Superior: ')

    //processamento
    const NumerosPrimos = ListarPrimos(LimiteInferior,LimiteSuperior)

    //exibição dos numeros primos
    print(` >>> OS NÚMEROS PRIMOS ENTRE ${LimiteInferior} E ${LimiteSuperior} <<<
${NumerosPrimos}`)
}


main()