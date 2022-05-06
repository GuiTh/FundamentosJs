//simulando uma array em um objeto
const quaseArray = {0:'rafael', 1:'ana', 2: 'bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{//simulando a funcao tostring
    value: function(){return Object.values(this)},
    enumerable:false
})
console.log(quaseArray[0])

const meuAray= ['rafael','ana','bia']
console.log(quaseArray.toString(),meuAray)//um objeto voce pode ter uma estrutura parecida com array