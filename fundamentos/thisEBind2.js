function pessoa(){
this.idade = 0 
//no momento que a funcao for instanciada como objeto o atributo idade estara a disposicao pra ser manipulado

const self = this
setInterval( function(){ //SetInterval  dispara outra funcao a partir de um determinado intertvalo de tempo que voce determina
    self.idade++
    console.log(self.idade)
}/*.bind(this)*/,1000)

}
new pessoa//instanciando a funcao pessoa como objeto