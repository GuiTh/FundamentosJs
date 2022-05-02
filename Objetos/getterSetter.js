/*const sequencia = {
    _valor: 1, //convençao, o underline fica subentendido que é uma variavel onde o valor nao deve ser alterado 
    get valor(){return this._valor++}, // o get serve para acessar o valor do atributo,
    set valor(valor){ // e o set serve para modificar o valor desse atributo.
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)*/
 
let pessoa = {
    nome: 'joao',
    sobrenome: 'pessoa',
    idioma: 'portugues',
     set linguagem(lang){
        this.idioma = lang;
    }
}
// com get eu pego o valor de um atributo, com set eu altero o valor de um atributo
pessoa.linguagem ="casteliano"
console.log(pessoa.idioma)
console.log(pessoa)
