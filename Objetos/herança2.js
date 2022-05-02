// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {
    attr1:'A' //o prototipo do objeto avo é o Object.prototype porque nao foi alterado
} 
const pai = {
    __proto__: avo, //o prototipo do pai é o avo entao ele vai procurar o elemento no objeto avo
    attr2: 'b'
}
const filho = {
    __proto__: pai, //o prototipo do filho é o pai entao ele vai procurar o elemento no objeto pai
    attr3:'c'
}
console.log(filho.attr1,filho.attrA,filho.attr0,filho.attr2,filho.attr3)

/* o __proto__ vai primeiramente procurar no escopo que ele se 
encontra pra depois abranger os outros e acessar 
outros objetos procurado o prototipo, se nao encontrar ele retorna undefined*/

