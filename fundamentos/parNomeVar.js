function exec(){
    const saudacao = `fala` //contexto lexico 2
    return saudacao
}
//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: `pedro`,
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: `rua muito legal`,
        numero: 123,
    }
}
// par nome/valor
const saudacao = `opa` //contexto lexico 1

console.log(saudacao)
console.log(exec())
console.log(cliente)