import { print } from "./utils.js"

function main(){

    let Contador = 0, ContadorSecundario = 0
    
    while(Contador < 10){
        let Tabuada_Do_Numero = ''
        //o contador vai ser o número da tabuada
        Contador++
        //contador secundaria vai ser os núemro que vão multiplicar o numero da tabuada
        ContadorSecundario = 0
        
        while(ContadorSecundario < 10){
            ContadorSecundario++
            
            let Resultado = Contador * ContadorSecundario
            Tabuada_Do_Numero += `${Contador} X ${ContadorSecundario}  = ${Resultado}\n`
        }
        
        print(`TABUADA DO [${Contador}]`)
        print(Tabuada_Do_Numero)
        }

    }


main()