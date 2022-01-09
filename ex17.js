function aumentoSalario(planoDetrabalho, salario){
    switch(planoDetrabalho){
        case 'a':
            return salario * 1.10
        case 'b':
            return salario * 1.15
        case 'c':
            return salario * 1.20
        default:
            return ("plano invalido")
    }
}
aumentoSalario.toFixed

console.log(aumentoSalario("a", 1300))
