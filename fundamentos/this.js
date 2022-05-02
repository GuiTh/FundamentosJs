/* this(ou self) e uma forma de referenciar o objeto atual da execucao
voce cria objetos dentro de uma classe
o objeto aluno com os atributos nome e nota sempre que o objeto for chamado voce pode determinar o valor no momento que chamou
 o conceito de This em js e confuso e pode variar com o jeito que a funcao e chamada
this e sempre o objeto que esta sendo referenciado no contexto de execucao, o dono da funcao que esta sendo executado
this em arrow function nao varia
 quando se tem uma funcao tradicional o this varia de acordo com quem chamou a funcao
this vai ser definido quando a funcao for definida
 this tem escopo global se a funcao arrow e declarada em aspecto global, funcao normal varia*/
const pessoa = {
    saudacao: `bom dia`,
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()