const sequencia = {
    _valor: 1, //convençao, o underline fica subentendido que é uma variavel onde o valor nao deve ser alterado 
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
 