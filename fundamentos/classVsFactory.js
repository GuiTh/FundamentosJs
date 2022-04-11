//sintaxe de criacao de classe 
class Pessoa{
constructor(nome){ //construtor da classe onde voce escreve as variaveis
this.nome = nome //this acessa o nome do objeto que foi instanciado, a variavel nome virou publica no momento que foi instanciado o this
}
falar(){ //funcao que imprime no console o nome que voce determina
    console.log(`meu nome e ${this.nome}`)//aponta para o parametro nome
}
}

//instanciando a classe
//a string joao foi jogada para o construtor
const p1 = new Pessoa(`joao`)//informa o nome do parametro Nome do construtor
p1.falar()

const CriarPessoa = nome => {
    return{ //esse objeto tem ciencia do contexto lexico e tem acesso a um escopo mais abrangente, algo que a class nao tem
        falar: () => console.log(`meu nome e ${nome}`)
    }
}
const p2 = CriarPessoa(`joao`)
p2.falar()