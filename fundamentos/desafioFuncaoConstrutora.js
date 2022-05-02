function pessoa(nome){ // function factory 
    this.nome = nome
    this.falar = function(){
        console.log(`o nome é ${this.nome}`)
    }

}

const nomeDoMarmanjo = new pessoa(`joao`)

nomeDoMarmanjo.falar()