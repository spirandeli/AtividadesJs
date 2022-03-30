function diasDaSemana(dia){
    switch (dia){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return("Dia Util")
        case 1:
        case 7: 
            return("Fim de semana")
        default:
            return("Dia invalido")
    }

}

console.log(diasDaSemana(5))
console.log(diasDaSemana(6))
console.log(diasDaSemana(4))
console.log(diasDaSemana(1))
console.log(diasDaSemana(3))
console.log(diasDaSemana(2))