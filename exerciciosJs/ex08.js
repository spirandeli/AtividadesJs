let listapontuacoes = "13, 20, 40, 40, 50, 60"

function avaliapontuacoes (listapontuacoes){
    let pontuacoes = listapontuacoes.split(", ")
    let quebrarecorde = 0
    let piorjogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            quebrarecorde++
        }else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorjogo = i+1
        }
    }
    return [quebrarecorde, piorjogo]
}

console.log(avaliapontuacoes(listapontuacoes))