//isso n e visivel fora desse modulo
let a = 2

//isso tudo e visivel
//outra forma de exportar
module.exports = { //nao pode ser usado apenas exports ou apenas this pra exprtar um objeto, apenas module.exports
    bomDia:'Bom dia',
    boanoite(){
        return 'boa noite'
    }
}