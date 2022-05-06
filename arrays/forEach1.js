/**
 * MAP, REDUCE E FILTER SAO FORMAS DE PERCORRER ARRAY COM MAIS PROPOSITO
 * o foreach tambem faz só que apenas percorre, com menosn funcionalidade
 * a funcao callback de foreach recebe 3 parametros
 * indice é sempre o segundo parametro, o primeiro é sempre o valor, o terceiro parametro é o proprio array
 */
const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']
aprovados.forEach(function(nome, indice){ //
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)