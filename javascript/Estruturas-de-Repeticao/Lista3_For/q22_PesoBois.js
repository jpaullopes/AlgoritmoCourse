import { GetNumberIntegerAbove, print, input, GetAllNumberAbove } from "./utils.js"

function ComputarMaior(Valor1,Valor2){//funcção que retorna qual é o maior valor dentre dois valores
    if(Valor1 > Valor2){
        return Valor1
    }
    return Valor2
}


function ComputarMenor(Valor1,Valor2){//funcção que retorna qual é o menor valor dentre dois valores
    if(Valor1 < Valor2){
        return Valor1
    }
    return Valor2
}


function main(){

    //entradada de dadso, quantidade de bois
    const NumeroBois = GetNumberIntegerAbove('Informe a quantidade de bois: ',0)

    let IdentificaçãoBoiMagro = '', PesoBoiMagro = 0
    let IdentificaçãoBoiGordo = '', PesoBoiGordo = 0

    //processamento
    for(var i = 0; i < NumeroBois; i++){

        //entradada da idnetificação do boi e do peso
        const IdentificacaoBoi = input('Informe o número de identificação do boi: ')
        let PesoBoi = GetAllNumberAbove('Informe o peso do boi[Kg]',0)

        //para que na primeira iteração o menor peso receba o peso do primeiro boi
        if(i === 0){
            PesoBoiMagro = PesoBoi
        }

        PesoBoiMagro = ComputarMenor(PesoBoiMagro, PesoBoi)
        PesoBoiGordo = ComputarMaior(PesoBoiGordo, PesoBoi)

        //verifica o peso do boi e atribui a idnetificação ao boi mais magro e ao mais gordo
        if(PesoBoiMagro === PesoBoi){
            IdentificaçãoBoiMagro = IdentificacaoBoi
        }
        if(PesoBoiGordo === PesoBoi){
            IdentificaçãoBoiGordo = IdentificacaoBoi
        }

    }
        //exibição da tabela com os dados do boi mais magro e do mais gordo
        const Tabela = `
        IDENTIFICAÇÃO DO BOI MAIS MAGRO : [${IdentificaçãoBoiMagro}]
        PESO DO BOI MAIS MAGRO          : [${PesoBoiMagro.toFixed(2)}]KG
        IDENTIFICAÇÃO DO BOI MAIS GORDO : [${IdentificaçãoBoiGordo}]
        PESO DO BOI MAIS GORDO          : [${PesoBoiGordo.toFixed(2)}]KG`

        print(Tabela)
}


main()