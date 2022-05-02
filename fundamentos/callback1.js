 const fabricantes = ['mercedes','audi','bmw'] //lista de nomes

 function imprimir(nome, indice){ //essa função vai printar o nome e o indice de cada elemento do array
     console.log(`${indice +1}. ${nome}`)
 }
 
fabricantes.forEach(imprimir) //para cada item no array FABRICANTES imprime a função IMPRIMIR
fabricantes.forEach(function(a){ //mesma coisa de cima porem com uma função anonima
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante)) //mesma coisa porem arrow function