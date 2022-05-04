//CLASSE EM JS É CONVERTIDO PRA FUNCAO E HERANÇA É UMA CADEIA DE PROTOTIPOS
//tudo acaba convergindo pra funcao 

 //instanciando um objeto atraves de uma funcao construtora com o operador new

 function Aula(nome,video){ //funcao construtora
     this.nome = nome
     this.video = video
 }
//quando se usa o operador new vc cria um novo objeto e o New aponta para a funcao construtora
 const aula = new Aula("Bem vindo", 213) //operador new pra instanciar um novo objeto atraves dessa funcao
 const aula2 = new Aula("Até Breve", 456) //operador new pra instanciar um novo objeto atraves dessa funcao
 console.log(aula, aula2)

 //simulando operador New
 function novo(f,...params){
     const obj = {} //como esta simulando o new tem que escrever anotação literal de objetos e nao o proprio new
     obj.__proto__ = f.prototype
     f.apply(obj,params)
     return obj
    }
    /*  1) criou um objeto novo com anotacao literal de objeto
        2) associou o prototipo do objeto criado ao atributo prototype da funcao passada como parametro(nesse caso F = Aula)
        3) e chamou Funcao.apply(ele vai executar a funcao F) passando como objeto de contexto o obj criado e passando os parametros que recebeu no metodo novo
        4) e retorna o objeto criado a partir de uma funcao
        */

    const aula3 = novo(Aula, "Bem vindo", 123)
    const aula4 = novo(Aula, 'Até breve', 456)