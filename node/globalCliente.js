require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'eita'
console.log(MinhaApp.nome)//o problema do global é que o valor dele pode ser alterado, para resovler isso devemos usar o object.freeze