import { GetNumber, print, GetNumberBetween, GetNumberInteger } from "./ultilitariosAPI.js"

//verificar se é valido continuar
function VerificarContinuidade(Valor_Veiculo,Valor_Entrada, PercentualSaida){

    const Valor_Minimo_De_Entrada = Valor_Veiculo * 0.3    

    const Percentual_Entrada = (Valor_Entrada * 100) / Valor_Veiculo

    return((Valor_Entrada < Valor_Minimo_De_Entrada) || ((Percentual_Entrada + PercentualSaida) > 60)
    || (PercentualSaida >= 0 && PercentualSaida <= 30))
}

function VerificarViabilidade_DaParcela(Tipo_De_Servidor, Salario, Parcela_Mensal){
    let ValorParcela =  Salario * 0.30
    if(Tipo_De_Servidor === 0){

        ValorParcela =  Salario * 0.35
        const SeCabeNaRenda = Parcela_Mensal <= ValorParcela ? 'Cabe na renda' : 'Não cabe na renda'
        return SeCabeNaRenda
    }

    const SeCabeNaRenda = Parcela_Mensal <= ValorParcela ? 'Cabe na renda' : 'Não cabe na renda'
    return SeCabeNaRenda
}

function main(){

    const ValorVeiculo = GetNumber('Informe o valor do veiculo[R$]: ')

    const ValorRendaComprador = GetNumber('Informe o valor da sua renda[R$]: ')
    const TipoDeServidor = GetNumberBetween('Você é servidor Público[0] ou Privado/Autônomo[1]: ',0,1)
    const ValorDeEntrada = GetNumber('Informe o valor da entrada desejada[R$]: ')
    const PercentualSaida = GetNumber('Informe o percentual de saída[%]: ')
    const MesesParcelar = GetNumberInteger('Informe o número de meses para parcelar o saldo devedor: ')
    const TaxaJurosFinanciamento = GetNumber('Informe a taxa de juros do financiamento[%]: ')
    const TaInflação_Do_Mes = GetNumber('Informe a inflação do mês[%]: ')

    if(!(VerificarContinuidade(ValorVeiculo, ValorDeEntrada, PercentualSaida))){

    }
    else{
        const ValorDeSaida = PercentualSaida * ValorVeiculo
        const Saldo_Devedor = ValorVeiculo - (ValorDeEntrada + ValorDeSaida)
        const Parcela_Mes = Saldo_Devedor / MesesParcelar

        const Viabilidade_De_Pagamento = VerificarViabilidade_DaParcela(TipoDeServidor, ValorRendaComprador, Parcela_Mes)




        const Tabela = 
`valor de entrada(% - R$[${ValorDeEntrada.toFixed(2)}])
valor a ser financiado sem IOF (% - R$)
valor do IOF (% - R$)
valor a ser financiado com IOF (% - R$)
valor da saída (% - R$[${ValorDeSaida.toFixed(2)}])
Parcelamento: N[${MesesParcelar}] parcelas de R$[${Parcela_Mes}]
Soma das Parcelas: R$
Total a ser pago (Entrada+Parcelamento+Saída)
${Viabilidade_De_Pagamento}`

        print(Tabela)
}
}



main()