console.log(module.exports)
console.log(module.exports == this)
console.log(module.exports == exports)
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) //exports e uma variavel que aponta ao mesmo objeto

exports = {
    nome:'teste'
}

console.log(module.exports)

module.exports ={publico:true}
//sempre que precisar atribuir um objeto que precisa ser exportado, o uso de module.exports e obrigatorio
//this e exports sao modos diferentes de apotnar para o mesmo objeto que module.exports aponta, 
//se for criar um NOVO objeto na propria pagina nao adiant amudar exports, pois o objeto nao sera retornado