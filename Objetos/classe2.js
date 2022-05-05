/**
 * Todos os exemplos de herança em objeto funcionam igualmente em classe
 * classes sao apenas outro metodo de escrever uma funcao
 * 
 */

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {//extends é a forma de declarar que uma classe tera outra classe como prototipo
    constructor(sobrenome,profissao = 'professor'){
        super(sobrenome) //esta chamando o constructor de avo para setar o sobrenome do pai
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super("Silva")
    }
}
const filho = new Filho
console.log(filho)