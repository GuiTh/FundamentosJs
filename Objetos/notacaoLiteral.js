const a = 1
const b = 2
const c = 3
//jeito antigo de declarar objeto
const objt1 = {a:a,b:b,c:c}
//jeito novo
const objt2 = {a,b,c}
console.log(objt1,objt2)


const nomeAttr = 'nota'
const valorAttr = 7.89
const objt3 ={}

objt 
3[nomeAttr] = valorAttr
console.log(objt3)
const objt4 = {[nomeAttr]: valorAttr}
console.log(objt4)

const objt5 = {
    funcao1: function(){

    },
    funcao2(){

    }
}
console.log(objt5)
