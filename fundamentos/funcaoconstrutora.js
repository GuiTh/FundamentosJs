function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado, pertence só ao escopo da funcao
    let velocidadeAtual = 0 // esse atributo só pertence a funcao entao nao pode ser alterada quando o objeto for instanciado
    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual())