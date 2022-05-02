function pegaNumeroAleatorio(numeroMinimo, numeroMaximo){
    const numero = Math.random() * (numeroMinimo - numeroMaximo) + numeroMinimo
    return Math.floor(numero)
}
let numero1 = -1
do{
    numero1 = pegaNumeroAleatorio(-1, 10)
    console.log(`o numero foi ${numero1}`)
}while (numero1 != -1)

console.log('agora o numero foi 1')
