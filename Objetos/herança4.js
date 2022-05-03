function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto // criou um objeto a partir de uma funcao construtora
const obj2 = new MeuObjeto   // criou um objeto a partir de uma funcao construtora
console.log(obj1.__proto__ === obj2.__proto__) // os dois ovjetos tem o mesmo valor
console.log(MeuObjeto.prototype === obj1.__proto__) //os objetos estao apontando para o mesmo prototipo
// quando voce cria um objeto a partir de uma funçao construtora usando New o prototipo do objeto automaticamente aponta para a funcao que voce criou.prototype
// quando voce cria um objeto a partir do new object ou a partir do objeto literal por padrao o prototipo dele é object.prototype

MeuObjeto.prototype.nome = "antonio marmanjo" //sempre que 
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = "rafael"
obj2.falar()
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //esta mudando a referencia de obj3, esta tirando de Object.prototype(por ser um objeto literal) e referenciando em MeuObjeto.prototype
obj3.nome ="obj3"
obj3.falar()

//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)// criou um objeto atraves da funcao
console.log(MeuObjeto.__proto__ == Function.prototype) //o objeto tem uma funcao(__proto__) referencia o Function.prototype porque esta abaixo do prototipo de funcao
console.log(Function.prototype.__proto__ == Object.prototype) //o prototipo de function pode apontar para o prototipo de objeto porque fica abaixo dele
console.log(Object.prototype.__proto__ === null) //nulo porque nao aponta para nada alem de Object.prototype porque nao tem nada acima de Object.prototype
/*
MeuObjeto é uma funcao que tem o atributo prototype que aponta para MeuObjeto
MeuObjeto.prototype é um objeto que tem um prototipo a partir de __proto__ que é Object.prototype
A FUNCAO MeuObjeto alem de ter o atributo prototype ele tem um protottype dfele(__proto__) que aponta para Function.Prototype
Function.Prototype aponta para Object.prototype*/