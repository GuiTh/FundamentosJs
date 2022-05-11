/**Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo 
array:
 */
const array = [7,14,'ola']
function retornaArray(){
    const primeiroElemento = array.shift()
    const ultimoElemento = array.pop()
    return [primeiroElemento, ultimoElemento]

}
console.log(retornaArray())