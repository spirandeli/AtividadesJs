function calculoAnoBissexto(ano){
    if(ano % 400 == 0){
        return true
    } 
    else if(ano % 100 == 0){
        return false

    }
    else if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(calculoAnoBissexto(1500))
console.log(calculoAnoBissexto(2004))
console.log(calculoAnoBissexto(1600))