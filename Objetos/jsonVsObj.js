//criando um objeto e transformando em json
//json é formato de dados
//json pode ser lido em java, c#, ruby, python entao é usado em formato de comunicacao entre linguagens
const obj = {a:1,b:2,c:3,soma(){return a + b +c}}
console.log(JSON.stringify(obj)) //transformou o objeto em texto e excluiu a funcao por ser um formato de dados, nao algo executado
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) //transforma a string em objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3}'))// atributos sao delimitados com aspas duplas
console.log(JSON.parse('{"a":1.7 ,"b":"string", "c": true, "d":{}, "e": [] }'))
//json.parse reconhece int, string, boolean, objeto vazio e array vazio qualquer texto tem que ser determinado por aspas dulas
//nao pode ter funcoes dentro do json
//com json voce gera strings a partir de objetos e vice versa