console.log(typeof Object)

//funçao sem retorno

function funcaoSemRetorno(a,b){
    console.log(a + b)
}
funcaoSemRetorno(2,3)

//função com retorno

function funcaoComRetorno(b,c =555){
    return b+c
}
console.log(funcaoComRetorno(2,3))
console.log(funcaoComRetorno(2))