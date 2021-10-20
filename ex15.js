function revendaCarro(carro){
    switch(carro){
        case 'hatch':
            return ("Compra efetuada com sucesso")
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return("Tem certeza que não prefere este modelo?")
        default:
            return("Não trabalhamos com este tipo de automóvel aqui")
    }
}
 

console.log(revendaCarro("hatch"))
console.log(revendaCarro("sedan"))
console.log(revendaCarro("dasjo"))
console.log(revendaCarro("motocicleta"))