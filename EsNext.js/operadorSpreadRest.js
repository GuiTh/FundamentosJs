//rest(juntar)/spread(espalahar)
//usar rest com parametro de funcao

//spread com objeto
const funcionario = { nome:'maria', salario: 12348.99}
const clone = {ativo:true,
     ...funcionario}//nesse exeplo ele clona todos os atribuitos do objeto funcionario e separa os elementos dentro dele mesmo 
console.log(clone)

//usar spread com array
const grupoA = ['joao','pedro', 'gloria']
const grupoFInal = ['Maria', ...grupoA, 'Rafaela'] // pega todos os elementos do array e clona dentro dele mesmo 
console.log(grupoFInal)