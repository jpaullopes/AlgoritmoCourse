import { GetNumberIntegerAbove, print } from "./utils.js"

//Função que calcula o fatorial
function ComputarFatorial(Numero){
    let Fatorial = 1

    for(let i = 1;i <= Numero; i++){
        Fatorial = Fatorial * i
    }

    return Fatorial
}


function main(){

    //entrada de dados
    const NumeroDeEntrada = GetNumberIntegerAbove('Você quer ver o fatorial de qual número? ',0)
    
    //porcessamneto, numero fatorial
    const NumeroFatorial = ComputarFatorial(NumeroDeEntrada)

    //exibição do fatorial
    print(`O fatorial do número [${NumeroDeEntrada}]! é o [${NumeroFatorial}].`)

}


main()