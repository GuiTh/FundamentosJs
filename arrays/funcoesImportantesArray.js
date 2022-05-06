const pilotos = ['vetel','alonso','raikkonen','massa']
pilotos.pop()//remove o ULTIMO elemento do array
console.log(pilotos)

pilotos.push('verstapen')
console.log(pilotos)

pilotos.shift()// remove o PRIMEIRO elemento da array
console.log(pilotos)

pilotos.unshift('hamilton') //unshift adiciona um valor no PRIMEIRO indice do array
console.log(pilotos)


//SPLICE tanto adiciona quanto remove valores do array
//adiciona
pilotos.splice(2,0,'bottas','massa')//nesse caso ele esta adicionando no indice 2, nao esta apagando nenhum indice e esta passando os valores que o indice 2 vai ter
console.log(pilotos)

//remove
pilotos.splice(3,1)//voce determina que o indice 3 sera alterado no primeiro parametro, e no segundo voce decide se o valor do parametro sera apagado ou n


const algunsPilotos = pilotos.slice(2)// essa funcao cria um novo array a partir do array que voce passou e do indice que voce declarou no parametro do Slice
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1,4)//nesse caso voce determina em qual elemento o slice começa a fazer o novo array e determina no segundo parametro em qual indice o slice para de adicionar ao seu array
