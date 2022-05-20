//dentro do capitulo de node, sempre que a classe for acabar com 'Cliente'significa que ela vai usar outros modulos definidos
//exemplos que usam mais de um arquivo para explorar o sistema de modulos em node
//para importar algo em js voce usa require
const moduloA = require('./moduloA') //tudo que foi exportado do moduloA foi guardado em um objeto armazenado na constante moduloA
const moduloB = require('./moduloB') //tudo que foi exportado do moduloB foi guardado em um objeto armazenado na constante moduloB


console.log(this)
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boanoite())
console.log(moduloB)