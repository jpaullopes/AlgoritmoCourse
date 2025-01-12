import { print } from "./utils.js"

function main(){
    
    for(let Multiplicando = 1;Multiplicando <= 10;Multiplicando++){

        let TabuadaDoNumero = ''

        //processamento
        for(let Multiplicador = 1;Multiplicador <= 10; Multiplicador++){

            let Resultado = Multiplicando * Multiplicador
            TabuadaDoNumero += `${Multiplicando} X ${Multiplicador}  = ${Resultado}\n`//escreve a linha da tabuada do numero
        }
        
        print(`TABUADA DO [${Multiplicando}]`)
        print(TabuadaDoNumero)
        }

    }


main()