//algumas funcoes middwares serao declaradas
//middleware(chain of responsability)

const passo1 = (ctx, next)=>{
    //ctx  um objeto que sera passado de um passo ao outro para que voce atribua novos valores nele,
    //a funcao next dispara o proximo passo da cadeia quando e chamada
    ctx.valor1 = 'mid1'
    next()
} 

const passo2 = (ctx,next) =>{
    //pega o contexto do primeiro passo e adiciona o atributo valor2 no objeto contexto
    //depois dispara o proximo passo
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' //pega o objeto contexto e adiciona o atributo valor3

//sera feito uma funcao que vai executar todos os middleware e chamar todos os next quando a funcao for disparada
const exec = (ctx, ...middleware) =>{
    //recebe o objeto contexto e um conjunto de funcoes middleware
    //o conceito e chamar varias funcoes e elas transformam tudo em um array, nesse caso um chamado middleware
    const execPasso = indice =>{ 
        middleware && indice < middleware.length &&
        middleware[indice](ctx, () => execPasso(indice + 1)) //o indice pega o indice de middleware e executa uma funcao que pega o contexto e executa um next inline, a funcao chamara ela mesmo e adicionar mais um no valor
        //nesse caso o execpasso roda o contexto no indice atual da array middleware depois pula pro proximo indice do array e fica nesse loop ate chegar no ultimo indice de middleware
        //const execpasso vai pegar o indice do array criado pelo ...middleware e executar um comando

    }
    execPasso(0)
}

const ctx = {} //cria o objeto contexto vazio para que a funcao adicione os valores
exec(ctx, passo1,passo2,passo3) //o ...midlware vai juntar todos os passos em um array, o middleware e conhecido como operador rest
//posso trocar a ordem dos passos CASO ele tenha next no final, por exemplo
//se eu coloco o passo3 como primeiro ou segundo ele so vai imprimir o terceiro porque a execucao dessa funcao nao chama o proximo passo com a funcao next() igual o passo1 e passo2 tem
console.log(ctx)