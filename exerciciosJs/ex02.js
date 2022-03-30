let triangulos = (a,b,c) =>{
    if(a == b & a == c ){
        console.log("Triangulo equilatero")
    }else if (a == b & a !== c){
        console.log("Triangulo Isoceles")
    }else{
        console.log("Triangulo escaleno")
    }
}

triangulos(1,1,1)
triangulos(1,1,3)
triangulos(5,2,4)