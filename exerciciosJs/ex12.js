function fatorial(numero){
    let resultado = numero
    do{
        numero = numero - 1
        resultado = resultado * numero
    }while(numero > 1)
    return resultado
}


console.log(fatorial(6))
console.log(fatorial(2))
console.log(fatorial(9))
console.log(fatorial(7))
console.log(fatorial(4))