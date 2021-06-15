const pesoideal = (altura, sexo) =>{
    
    if(sexo == 'M'){
        console.log((72.7 * altura) - 58 + 'kg é o peso ideal')
    }else if( sexo == 'F'){
        console.log((62.1 * altura) - 44.7 + 'kg é o peso ideal')
    }else{
        console.log(`Opção inválida!`)
    }

}


pesoideal(1.9, 'M')
pesoideal(1.7, 'F')
