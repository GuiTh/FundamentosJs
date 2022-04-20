/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const triangulo = function(primeiroLado=1,segundoLado=1,terceiroLado =1){
    if(primeiroLado == segundoLado && primeiroLado == terceiroLado){
        console.log(`é equilatero ${primeiroLado,segundoLado,terceiroLado}`)
    }else if(primeiroLado == segundoLado && primeiroLado != terceiroLado 
        || primeiroLado != segundoLado && primeiroLado == terceiroLado 
        || segundoLado == terceiroLado && segundoLado != primeiroLado 
        || segundoLado != terceiroLado && segundoLado == primeiroLado){
        console.log(`é isosceles ${primeiroLado,segundoLado,terceiroLado}`)
    }else if(primeiroLado != segundoLado && primeiroLado != terceiroLado){
        console.log(`é escaleno ${primeiroLado,segundoLado,terceiroLado}`)
    }

}
triangulo()
triangulo(1,2,3)
triangulo(1,2,2)
triangulo(2,1,2)