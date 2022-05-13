/**Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao 
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a 
seguir: */

const inverter = {a:1, b:2, c:3}

function inverteObjeto(objeto){
    const objetoTrocado = {}
    Object.entries(objeto).forEach(parChaveValor =>{
        const chave = 0,
                valor = 1
                objetoTrocado[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoTrocado
}

console.log(inverteObjeto(inverter))