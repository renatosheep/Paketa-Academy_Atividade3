let num1, num2, res

function valida(num1, num2) {
     if(num1 <= 0 || num2 <= 0){
          console.log('expressão inválida, digite numéros inteiros')
     }else{
          res = num1%num2
          console.log(`O resto da divisão de ${num1} dividido por ${num2} é: ${res}`)
     }
     
}

valida(3,7)