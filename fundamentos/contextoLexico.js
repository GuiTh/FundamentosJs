const valor = `global` //variavel declarada no escopo global da pagina(node)

function minhaFuncao(){ //funcao criada pra testar o contexto lexico
    console.log(valor)//o console.log tenta pegar achar a variavel valor localmente no escopo da funcao mas como nao encontra procura no escopo mais abrangente, o global
}

function exec(){ //funcao criada pra printar na tela o retorno da funcao minhaFuncao
    //
    const valor = `local`
    minhaFuncao()
}

exec()