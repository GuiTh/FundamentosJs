//usando a notação liberal 
const objt1 = {

}
console.log(objt1)

//object em Js
console.log(typeof Object, typeof new Object)

const objt2 = new Object
console.log(objt2)

//funções construtoras
//nivel de visibilidade: nivel global, nivel do arquivo e da função; visibiçidade do browser: global, funçao e bloco a partir de variavel com let e const
function produto(nome,preço,desconto){ 
        this.nome = nome
        //funcao que pega os parametros preço e desconto e faz a matematica
        this.getPreçoPreçoComDesconto = () => { //essa função esta acessivel quando o objeto for instanciado 
        return preço = (1 - desconto)
    }
}
const p1 = new produto('caneta', 7.99,0.15) // se eu quiser eu posso futuramente chamar p1.nome e alterar o nome do produto instanciado
const p2 = new produto('notebook',2998.99,0.25)
console.log(p1.getPreçoPreçoComDesconto(),p2.getPreçoPreçoComDesconto())//instanciando a funcao getPreçoComDesconto e o objeto produto

//FUNÇÃO FACTORY
function criarFuncionarios(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30 - faltas)
        }
    }
}

const f1 =  criarFuncionarios('joao',7990,4)
const f2 = criarFuncionarios('maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())

//OBJECT.CREATE

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// UMA FUNCAO FAMOSA QUE RETORNA OBJETO

const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)