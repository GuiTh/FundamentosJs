//arrays em javascript sao objetos com caracteristicas proprias
//ele identifica a partir de indices e nao chaves com valores
console.log(typeof Array,typeof new Array,typeof [] )
// a boa pratica diz que nao se deve trabalhar com dados variados dentro de um array
let aprovados = new Array('bia','carlos', 'ana') // uma forma nao recomendada porem valida
console.log(aprovados)
//arrays declarados como constantes nao faz com que os elementos do array sejam constatnes, voce pode fazer alteraçoes nos elementos ja declarados, nao no tamanho do array

//anotacao literal é o metodo recomendado para declarar arrays
aprovados = ['bia', 'carlos','ana']
console.log(aprovados[0])// atributos de array sao acessados por indices
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'paulo' //uma forma de adicionar elementos em um array ja existente
aprovados.push('abia')//o metodo mais recomendado de add elementos
console.log(aprovados.length)

aprovados[10] = "guilherme" //pode ser atribuido um elemento em uma array com o indice maior que o tamanho da propria array
console.log(aprovados.length) //nesse caso todos os elementos entre o ultimo elemento do array e esse adicionado se tornarao undefined
console.log(aprovados)

aprovados.sort()//o metodo sort reorganiza o array colocando os valores em ordem e deixando os undefined em ultimo
console.log(aprovados)

delete aprovados[1] //deleta o valor do indice indicado mas nao reorganiza o array
// no caso de delete o valor se torna undefined mas o indice dele continua o mesmo
console.log(aprovados[1])

aprovados = ['bia','carlos', 'iana']
aprovados.splice(1,1,'elemento1','elemento2')/*splice serve para adicionar elementos em um determinado indice e tambem serve para apagar elementos em um certo indice
voce determina isso no primeiro parametro decidindo o indice em que elemento sera adicionado ou removido no segudno voce determina se o indice vai ser apagado ou nao(1= o valor sera apagado, 0= o valor nao sera apagado)
*/
console.log(aprovados)
