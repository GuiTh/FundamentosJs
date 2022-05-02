   /* com herança voce nao precisa copiar e colar atributos de um objeto pro outro, voce pode acessa-los e reutiliza-los
    sempre priorizar composiçao acima de herança 
    HIERARQUIA DE OBJETOS, referencia um elemento e vai procurando esse elemento atraves do codigo   
    sempre que referenciar NEW cria um objeto novo 
    Object É UMA FUNCAO
    prototype é o conceito de prototipo

    */     

   const ferrari = {
       modelo: "f40",
       velocidadeMaxima: 324,
       
   }
   const volvo = {
       modelo: 'v40',
       velocidadeMaxima: 200,
   }

   console.log(ferrari.prototype) //undefined poruqe o objeto ferrari nao tem o atributo prototype
   console.log(ferrari.__proto__) //a partir disso voce acessa o prototipo
   console.log(ferrari.__proto__ === Object.prototype) //o atributo que referencia o prototipo de ferrari represente o prototipo de ferrari
   console.log(volvo.__proto__ === Object.prototype) //tanto o prototipo de ferrari e volvo sao iguais
   console.log(Object.prototype.__proto__)

   function MeuObjeto(){}
   console.log(typeof Object, typeof MeuObjeto)
   console.log(Object.prototype, MeuObjeto.prototype)