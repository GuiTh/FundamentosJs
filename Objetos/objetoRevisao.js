//coleçao dinamica de pares chave/valor
const produto = new Object //forma de criar objeto atraves do new, o new transofrma uma funcao em funcao construtora e a partir disso ele instancia um objeto
//meios de atribuir uma chave e seu valor a um objeto
produto.nome = 'cadeira'
produto ["marca do produto"] = 'generica'
produto.preço = 200
console.log(produto)

delete produto.preço //deleta um atributo especificado do objeto
console.log(produto)

const carro = {
    // criando outro objeto e especificando chaves e valores
    modelo : "a4",
    valor : 89000,
    proprietario:{ // o valor de uma chave pode ser outro objeto
        nome: 'raul',
        idade: 56,
        endereço:{
            logradouro:'rua ABC',
            numero:123,
        }
    },
    condutores:[{ //arrays tambem pode ser valores de uma chave do objeto
        nome:'junior',
        idade:19
    },
    {
        nome:'ana',
        idade:42
    }],
    calculaValorSeguro: function(){ //function tambem é valor de 
        //...
    }
}
carro.proprietario.endereço.numero = 1000 // trocando o numero no objeto endereço
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante' //trocando o logradouro do objeto endereço
console.log(carro)
//apagando 3 objetos de carro
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calculaValorSeguro

console.log(carro)//printa o objeto carro
console.log(carro.condutores) //printa o atributo condutores que foi apagado, porem em vez de gerar erro ele retorna condutores como indefinido
console.log(carro.condutores.length) // vai gerar problema por nao ter length em undefined