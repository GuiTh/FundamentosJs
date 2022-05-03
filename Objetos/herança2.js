// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'Z' // nao é recomendado usar object.prototype
const avo = {
    attr1:'A' //o prototipo do objeto avo é o Object.prototype porque nao foi alterado
} 
const pai = {
    __proto__: avo, //o prototipo do pai é o avo entao ele vai procurar o elemento no objeto avo
    attr2: 'b'
}
const filho = {
    __proto__: pai, //o prototipo do filho é o pai entao ele vai procurar o elemento no objeto pai
    attr3:'c'
}
console.log(filho.attr1,filho.attrA,filho.attr0,filho.attr2,filho.attr3)

/* o __proto__ vai primeiramente procurar no escopo que ele se 
encontra pra depois abranger os outros e acessar 
outros objetos procurado o prototipo, se nao encontrar ele retorna undefined*/

// exemplo de prototipo mais complexo

const carro = {
    velAtual: 0,
    velMax:200,
    acelerarMais(delta){
        if (this.velAtual +delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/g de ${this.velMax}Km/h` //o metodo vai ler a velocidade maxima que esta dentro de ferrari/volvo, nao de carro
        // a funçao le o valor do atributo onde ela esta sendo usada como prototipo
    }
}

const ferrari = {
    modelo:'f40',
    velMax: 324 //sombreamento ou shadowing, o atributo local sombrea os atributos de escopo mais abrangente
}

const volto = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}` //super referencia o prototipo
    }
}
Object.setPrototypeOf(ferrari,carro) //estabeleceu relacao entre o objeto ferrari e o objeto carro, informou para o sistema que a ferrari tem carro como prototipo
Object.setPrototypeOf(volto,carro)//estabeleceu relacao entre o objeto volvo e o objeto carro, informou para o sistema que o volvo tem carro como prototipo
//set prototype pede um objeto destino e o objeto que sera usado como prototipo (setprototypeof(destino,prototipo))
volto.acelerarMais(100)
console.log(volto.status()) //chama o metodo direto do objeto carro

ferrari.acelerarMais(300)
console.log(ferrari.status()) //chama o metodo direto do objeto carro