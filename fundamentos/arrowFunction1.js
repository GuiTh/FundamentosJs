let dobro = function (a){//forma padrao de se declarar uma variavel
    return 2 * a
}
dobro = (a) => {return 2 * a } // na arrow function so e necessario o parametro e o corpo da funcao

dobro = a => 2 * a //reduzindo ainda mais a sintaxe de uma arrow function, como tem apenas um parametro nao e necessario parenteses ()
// o corpo tambem e desnecessario nesse caso e o return e implicito
//funcoes arrow e ideal para funcoes de uma unica linha
console.log(dobro(Math.PI))

let ola = function(){ //funcao anonima
    return `ola`
}

//refatorando a funcao anonima para funcao arrow
ola = () => 'ola'
//simplificando ainda mais
ola = _ => `ola ` //nesse caso o parametro e o underline 
console.log(ola())