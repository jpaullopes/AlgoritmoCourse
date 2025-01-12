import { GetNumberIntegerAbove, print } from "./utils.js"

//Função que calcula o fatorial
function ComputarFatorial(Numero){
    let Contador = 0
    let Fatorial = 1

    while(Contador < Numero){
        Contador++
        Fatorial = Fatorial * Contador
    }

    return Fatorial
}

function main(){

    //entrada de dados
    const NumeroDeEntrada = GetNumberIntegerAbove('Você quer ver o fatorial de qual número? ',0)
    
    //numero fatorial
    const NumeroFatorial = ComputarFatorial(NumeroDeEntrada)

    print(`O fatorial do número [${NumeroDeEntrada}]! é o [${NumeroFatorial}].`)

}

main()