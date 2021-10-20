function calculadora(num1, operador, num2){
    switch(operador){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2    
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

console.log(calculadora(12,"+",14))
console.log(calculadora(12,"-",14))
console.log(calculadora(12,"*",14))
console.log(calculadora(80,"/",5))