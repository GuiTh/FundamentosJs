const prod = {}
prod.any = "celular ultra mega"
prod.preco = 4998.90
prod[`desconto legal`] = 0.40 // evitar atributos com espaco
console.log(prod)

const prod1 = {
    nome: `camisa polo`,
    preco: 79.90,
    muitoCaro: `sim`,
    facoOque: {
        opcao1: `nao compra`,
        opcao2: `compra, whatever`
    }
}
console.log(prod1)