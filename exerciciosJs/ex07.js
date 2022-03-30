let = bhaskara = (a,b,c) =>{
    delta = b**2 - 4*a*c
   if(delta < 0){
        console.log("Delta é Negativo")
   }else{
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)

    console.log(`Delta = ${delta}, X1 = ${x1}, X2 = ${x2}`)
    }
} 

console.log(bhaskara(1,-5,6))