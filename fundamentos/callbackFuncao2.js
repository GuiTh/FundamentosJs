const notas = [7,6,5,8,3,7,9]

// sem callback
const notasBaixas1 = [] //um array vazio que recebe os valores do for
for (let i in notas){ //esse for pega todas as notas menores que 7 e printa na array notasbaixas
    if (notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function(nota){ // uma funcao callback(Filter) chama outra funcao que verifica cada item do array e confirma se o numero e maior ou menor que 7
    return nota < 7
})
console.log(notasBaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7) //o mesmo de cima porem em arrow function
console.log(notasbaixas3)

const notasMenorQue7 = nota => nota < 7 //coloquei a arrow function em uma variavel
const notasBaixas3 = notas.filter(notasMenorQue7) //automatizei a funcao callback pra so chamar ela com a chamada de outra funcao
console.log(notasBaixas3) //o resultado e o mesmo