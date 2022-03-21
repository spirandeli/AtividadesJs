 function calcularPlano(idade){
    let planoSaude = 100
    if(idade < 10){
        return planoSaude + 80
    } else if (idade <= 30){
        return planoSaude + 50
    } else if (idade <=60){
        return planoSaude + 95
    } else if (idade > 60){
        return planoSaude + 130
    }
    let resultado = `O valor do plano de saúde é:R$${planoSaude},00`

    return resultado
}

console.log(calcularPlano(26))
console.log(calcularPlano(9))