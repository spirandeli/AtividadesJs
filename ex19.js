function cardapioeletronico(codigo, quantidade){
    switch(codigo){
        
        case 100:
           valorfinal = quantidade * 3
            return (quantidade + " Cachorro quente R$ " + valorfinal )
        case 200:
            valorfinal = quantidade * 4 
             return (quantidade + " Hambúrguer Simples  R$ " + valorfinal )
        case 300:
            valorfinal = quantidade * 5.5 
             return (quantidade + " Cheeseburguer  R$ " + valorfinal )
        case 400:
            valorfinal = quantidade * 7.5 
             return (quantidade + " Bauru   R$ " + valorfinal )
        case 500:
            valorfinal = quantidade * 3.5 
             return (quantidade + " Refrigerante   R$ " + valorfinal )
        case 600:
            valorfinal = quantidade * 2.8 
             return (quantidade + " Bauru   R$ " + valorfinal )    
              
        default:
            return ("Codigo Invalido")
    }

}



console.log(cardapioeletronico(100, 3))
console.log(cardapioeletronico(300, 2))
console.log(cardapioeletronico(600, 5))
console.log(cardapioeletronico(300, 2))
console.log(cardapioeletronico(500, 1))
console.log(cardapioeletronico(200, 8))
console.log(cardapioeletronico(400, 2))
console.log(cardapioeletronico(300, 1))