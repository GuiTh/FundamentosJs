//criar uma funcao que gera um numero aleatorio entre dois numeros predeterminados

function gerarNumeros(min, max){
    if (min > max){
    //     //se o valor minimo for maior que o valor maximo, os valores sao colocados em um array representado pelo A
    //    let a = [min,max]
    //    //depis ele vai pegar os elementos de A e atribuir a variaveis X e Y
    //    const [x,y,z] = a  //o array A tem 2 elementos mas estou declarando 3 variaveis, nesse caso a variavel Z sera ignorada

    //    //o que pode ser feito é o famoso Destructuring
           [max,min] = [min,max] //desse jeito, usando destructuring o valor 
    }
    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeros(10,30)
.then(num => num * 10)
.then(numx10 => `O numero gerado foi ${numx10}`)
.then(console.log)//em promisse voce nao chama a funcao console.log, voce passa a referencia, assun fazendo ele logar os thens passados anteriormente