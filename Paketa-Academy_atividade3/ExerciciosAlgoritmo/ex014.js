const acrescimo = (IPI, valor1, quant1, valor2, quant2 ) =>{

    let valor = (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)
    console.log(`O valor a ser pago é: ${valor.toFixed(2)} reais`)
}

acrescimo(2, 50, 10, 50, 10)