const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//kmesmo sendo um projeto simples ou um exemplo, essa e a criacao mais basica de um projeto backend em node
//axios faz requisicoes http, por exemplo est apegando o link de funcionarios

//funcoes pra filtrar as mulheres chinesas do arquivo
const chineses = f => f.pais === 'China'
const genero = f => f.genero === 'F'
const menorSalario = (func, funcAtual)=> { 
    return func.salario < funcAtual.salario ? func : funcAtual //verifica se o funcionario atual tem o salario maior que o funcionario da lista, se for ele retorna o funcionario e usa ele como funcionario atual comparando o salario dele com o dos outros, senao ele retorna funcionario atual

}


axios.get(url).then(response =>{
    const funcionarios = response.data


const funcionario = funcionarios.filter(chineses).filter(genero).reduce(menorSalario) //filtra o json com filter 
console.log(funcionario)
})

