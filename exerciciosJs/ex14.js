function feira(fruta){
    switch(fruta){
        case 'maça':
            return ("Não vendemos essa fruta aqui")
        case 'kiwi':
            return ("Estamos com escassez de kiwis")
        case 'melancia':
            return ("Aqui está, 3 reais o quilo")
        default:
            return("Confira e repita o pedido")
    }
}

console.log(feira("maça"))
console.log(feira("melancia"))
console.log(feira("kiwi"))
console.log(feira("matea"))