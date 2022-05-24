const instanciaUnicaA = require('./instanciaUnica')
const instanciaUnicaB = require('./instanciaUnica')

const instanciaNova = require('./instanciaNova')() //aqui a instancia nova esta retornando uma funcao factory
const contadorD = require('./instanciaNova')()

instanciaUnicaA.inc()
instanciaUnicaA.inc()


console.log(instanciaUnicaB.valor)

instanciaNova.inc()
instanciaNova.inc()
console.log(instanciaNova.valor, instanciaUnicaB.valor)