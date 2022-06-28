//chamar vbarias promisses e só chamar o then quaqndo todas forem cumpridasfunction gerarNumeros(min, max){
    function gerarNumeros(min, max, tempo){    
if (min > max){
        //     //se o valor minimo for maior que o valor maximo, os valores sao colocados em um array representado pelo A
        //    let a = [min,max]
        //    //depis ele vai pegar os elementos de A e atribuir a variaveis X e Y
        //    const [x,y,z] = a  //o array A tem 2 elementos mas estou declarando 3 variaveis, nesse caso a variavel Z sera ignorada
    
        //    //o que pode ser feito é o famoso Destructuring
               [max,min] = [min,max] //desse jeito, usando destructuring o valor 
            }
        return new Promise(resolve =>{
            setTimeout(function(){ const fator = max - min + 1
                const aleatorio = parseInt(Math.random() * fator) + min
                resolve(aleatorio)}, tempo)
            })
        
    }

    function gerarVariosNumeros(){
        return Promise.all([ 
            gerarNumeros(1,60,1000),
            gerarNumeros(1,60,500),
            gerarNumeros(1,60,300),
            gerarNumeros(1,60,400),
            //quando todos esses valores forem resolvidos ai sim o then sera executado
        ])
    }
    console.time('promise')
gerarVariosNumeros().then(numeros => console.log(numeros))
console.timeLog('promise')
console.timeEnd('promise')