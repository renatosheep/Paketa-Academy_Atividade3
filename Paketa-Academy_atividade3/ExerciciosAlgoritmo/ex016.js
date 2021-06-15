const idadeDias = (anos, meses, dias) =>{
    let resultado =  (dias+(anos*365)+(meses*30))
    console.log(`Sua idade em dias é ${resultado}` )
}

idadeDias( 34, 0, 0 )