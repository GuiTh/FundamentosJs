const valorCorrigido = function(real){
    real = `R$ ${real.toFixed(2).toString().replace('.',',')}`
    console.log(real)
}
valorCorrigido(0.1 + 0.2)