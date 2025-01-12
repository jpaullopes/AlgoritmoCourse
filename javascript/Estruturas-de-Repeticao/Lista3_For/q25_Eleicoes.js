import {ClearConsole, GetNumberInteger, GetNumberIntegerAbove, print} from "./utils.js"

//pede o voto e enquanto não for os numeros dos canditados ele continua perguntando
function PedirVoto(Pedido){
    let Voto = GetNumberInteger(Pedido)

    while(!(Voto === 1 || Voto === 2 || Voto === 3 || Voto === 9 || Voto === 0)){
        console.log('Voto inválido!')
        Voto = GetNumberInteger(Pedido)       
    }

    return Voto
}


function VerificarGanhador(VotosCandidato1,VotosCandidato2,VotosCandidato3){//retorna o ganhador da eleição

    let MaiorQuantidadeVotos = VotosCandidato1
    let Vencedor = 'CANDIDATO 1'

    if(VotosCandidato2 > MaiorQuantidadeVotos){
        MaiorQuantidadeVotos = VotosCandidato2
        Vencedor = 'CANDIDATO 2'
    }
    if(VotosCandidato3 > MaiorQuantidadeVotos){
        Vencedor = 'CANDIDATO 3'
    }

    return Vencedor    
}

function main(){

    //entrada de dados, numero de eleitores e tabela de votação
    const NumeroEleitores = GetNumberIntegerAbove('Informe o número de eleitores: ',0)
    const TabelaEleicao = `
    1, 2, 3 = VOTO PARA OS RESPECTIVOS CANDIDATOS
    9 = VOTO NULO
    0 = VOTO EM BRANCO`

    let VotosCandidato1 = 0
    let VotosCandidato2 = 0
    let VotosCandidato3 = 0
    let VotosBrancos = 0
    let VotosNulos = 0

    //processamento de dados
    for(let i = 1;i <= NumeroEleitores; i++){
        print(`ELEITOR(A) N° [${i}]`)
        print(TabelaEleicao)

        //entrada de dados, pede qual o voto do eleitor
        const VotoEleitor = PedirVoto('Infome o codigo do seu voto: ')

        //incrementa 1 voto para o respectivo tipo de voto
        if(VotoEleitor === 1){
            VotosCandidato1++
        }else if(VotoEleitor === 2){
            VotosCandidato2++
        }else if(VotoEleitor === 3){
            VotosCandidato3++
        }else if(VotoEleitor === 9){
            VotosBrancos++
        }else{
            VotosNulos++
        }

        ClearConsole()//limpa a tela para ninguem ver o voto de ninguem
    }

    const GanhadorEleicoes = VerificarGanhador(VotosCandidato1,VotosCandidato2,VotosCandidato3)

    //exibição dos dados, tabela com os dados da eleição
    const Tabela = `   
    TOTAL DE VOTOS PARA CADA CANDIDATO :
        CANDIDATO 1 : [${VotosCandidato1}]
        CANDIDATO 2 : [${VotosCandidato2}]
        CANDIDATO 3 : [${VotosCandidato3}]
    TOTAL DE VOTOS NULOS               : [${VotosNulos}]
    TOTAL DE VOTOS EM BRANCO           : [${VotosBrancos}]
    QUEM VENCEU A ELEIÇÃO              : [${GanhadorEleicoes}]`


    print(Tabela)

}


main()