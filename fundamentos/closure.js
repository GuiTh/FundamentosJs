//closure e o escopo criado quando uma funcao e declarada
//esse escopo permite a funcao acessar e manipular variaveis externas da funcao

//contexto lexico em acao

const x = `global`

function fora(){
    const x = `local`
    function dentro (){ //o closure dessa funcao Dentro esta dentro da funcao Fora, logo o escopo da funcao dentro esta dentro da funcao fora
        return x //
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())