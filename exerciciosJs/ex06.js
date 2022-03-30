let = jurossimples = (capitalinicial, txjuros, tempoaplicacao) =>{
       txjurosfinal = txjuros / 100
        capitalfinal = capitalinicial*(1 + txjurosfinal * tempoaplicacao) 
        return capitalfinal
}

console.log(jurossimples(100,2,2))

let = juroscomposto = (capitalinicial, txjuros, tempoaplicacao) =>{
    txjurosfinal = txjuros / 100
    
    capitalfinal = capitalinicial*((1 + txjurosfinal)**tempoaplicacao)

    return capitalfinal.toFixed(2)
}

console.log(juroscomposto(100,2,2))