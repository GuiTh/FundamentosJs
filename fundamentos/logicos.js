function compras( trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaude = !comprarSorvete //operador unario
    //criação inteligente de objeto: o valor e o nome do objeto ja é criado co o valor que o programador passa
    return{comprarSorvete,comprarTv50,comprarTv32, manterSaude} 
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))