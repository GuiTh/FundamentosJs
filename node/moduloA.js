/*como exportar modulos no node, formas de exportar*
todos os exemplos estudados no curso ate agora foram modulos do node que podem ser executados tanto pelo terminal quanto pela extensao code runner
*/

/*tanto this quanto exports sao objetos, objetos sao um conjunto de chaves e valores dinamicos, nesse caso
 a chave ola foi atribuida ao objeto This e a chave bem vindo foi atribuida ao objeto exports*/
this.ola =`Fala pessoas`

exports.bemVindo = 'Bem vindo ao node'

module.exports.ateLogo = 'Ate o proximo exemplo'