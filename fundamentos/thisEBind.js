const pessoa ={
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas entre programação funcional e OO
// colocar o pessoa.falar em uma variavel faz com que chamar ela nao referencie o objeto no contexto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) 
/*bind() serve para voce passar um objeto para que ele resolva o this
o this nessa situação é o objeto pessoa 
com o bind eu posso apontar o 
this para o objeto pessoa dentro de uma variavel*/
const a = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = a.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(a);
  console.log(boundGetX());
  // expected output: 42
  

  const bomDia = pessoa.saudacao.bind(pessoa)