//jeito simplificado
function confirmaNumero(numero){
    if(numero > 7 && numero < 9 || numero > 4 && numero < 6){
        console.log('o numero é verdadeiro')
    }else{
        console.log('numero falso')
    }
}
//confirmaNumero(8)
//confirmaNumero(5)
//confirmaNumero(1)

//jeito diferente
Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('quadro de honra')
    }else if(nota.entre(7,8.99)){
        console.log('aprovado')
    }else if(nota.entre(4,6.99)){
        console.log('recuperaçao')
    }else if(nota.entre(0,3.99)){
        console.log('reprovado')
    }else{
        console.log('nota invalida')
    }
    console.log('fim')
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)