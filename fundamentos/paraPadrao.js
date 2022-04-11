//valores padrao servem para parametros de funçao
// gerando valor padrao

function soma1(a,b,c){ /*forma mais famosa e utilizada 
para algoritmos alem de valores numericos padrao*/
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(),soma1(3),soma1(0,0,0))


//outros jeitos de gerar valor padrao
function soma2(a,b,c){
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1 //1 = o indice do parametro
    //versao C é a mais segura
    c = isNaN(c) ? 1 : c // melhor forma  de gerar valor padrao

    return a+b+c
} 

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// valor padrao do es2015
function soma3 (a=1,b=1,c=1){
    return a +b +c
}
console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))
