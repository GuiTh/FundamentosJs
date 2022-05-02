// funcao em js e first class object (citizen)
//higher order funciton

//funcao literal
function fun1(a/*parametros*/){
    //valores

}
//armazenar em variavel
const fun2 = function (){}

//armazenar em array
const array = [function(a,b){return a + b}, fun1, fun2 ]
console.log(array[0](2,3))

//armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return `opa`}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}
run(function(){
    console.log(`executando`)
})

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(2) //coloquei a chamada da funcao dentro de uma variavel pra poder apenas chamar o parametro da outra funcao