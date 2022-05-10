/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

const comparaNumero = function(n1,n2){
    if(n1 === n2 || n1 >= n2){
        return true
    }else{
        return false
    }
}
console.log(comparaNumero(0,0))
console.log(comparaNumero(1,0))
console.log(comparaNumero(0,1))
console.log(comparaNumero(0,'1'))

//outra solucao
function maiorOuIgual(primeiro, segundo) { 
    if(typeof primeiro != typeof segundo) return false 
   
    return primeiro >= segundo 
  }
  console.log(maiorOuIgual(1,1))
  console.log(maiorOuIgual(1,'1'))
  console.log(maiorOuIgual(1,2))
  console.log(maiorOuIgual(2,1))
