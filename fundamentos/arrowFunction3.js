let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//this agora aponta pra obj
comparaComThis(global)
// o obj vazio nao tem o mesmo valor que o escopo global, por causa do bind agora o this esta no contexto de obj
comparaComThis(obj)
//devido o bind agora this de ComparaComThis esta no contexto de obj

// o this dessa funcao é o modulo
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(obj)
//this nao aponta para obj porque esta associado ao arrow function, arrow function nao varia valor de this, sempre mantem ele no mesmo lugar
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
//colocar bind em arrow function nao funciona porque isso nao troca o valor de this da funçao arrow
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
//this em arrow  vai SEMPRE estar associado ao contexto em que ele foi escrito