const indicePoluicao = (indice) =>{
    if(indice >= 0.5){
        console.log('Todos os 03 grupos devem suspender suas atividades')
    }else if(indice == 0.4){
        console.log('Grupos 01 e 02 devem suspender suas atividades')
    }else if(indice == 0.3){
        console.log('Grupo 01 deve suspender suas atividades')
    }else{
        console.log('Nível de poluição está aceitável')
    }
}


indicePoluicao(0)
