const qtdnotas = (valor) => {
    let notas100 = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0
    let notas = valor
    while(valor != 0){
        if(valor >= 100){
            valor -= 100           
            notas100++
        }else if(valor >= 50){
            valor -= 50            
            notas50++
        }else if(valor >= 20){
            valor -= 20            
            notas20++
        }else if(valor >= 10){
            valor -= 10
            notas10++
        }else if(valor >= 5){
            valor -= 5
            notas5++
        }else if(valor >= 2){
            valor -= 2
            notas2++
        }
    }
    console.log(`O menor número de notas para o valor ${notas} é: 
                ${notas100} notas de cem 
                ${notas50} notas de cinquenta 
                ${notas20} notas de vinte 
                ${notas10} notas de dez 
                ${notas5} notas de cinco 
                ${notas2} notas de dois`)
}


qtdnotas(0)