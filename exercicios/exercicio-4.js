//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
const dividendo = function(dividendo = 2,divisor=2){
let resultado = Math.floor(dividendo / divisor)
    console.log(`resultado ${resultado}`)
    console.log(`resto ` + dividendo % divisor)
}

dividendo(25,3)