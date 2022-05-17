//importando o react
import React from 'react'
//react dom pra renderizar coisas na tela
import ReactDOM from 'react-dom'

//lembrando qu posso importar um elemento com qualquer nome,. porem coloco algo ludico para manter ordem
//COMPONENTES NAO PODEM COMECAR COM LETRA MINUSCULA, assim o jsx pode diferenciar um componente meu e uma div padrao
import BomDia from './componentes/BomDia'
//desestruturacao
//BoaTarde foi tirado do desconstruct pois ele foi exportado com default
//depois que coloquei os 2 componentes como export default eu pude importar com um nome especifico
//e determinar qual funcao eu queria atravez do Multi(nome dado ao import).BoaTarde/BoaNoite(o nome da funcao que euquero utilizar no momento)
import Multi from './componentes/Multiplos'

//nao posso alterar o valor de tipo ou nome pois saudacao esta sendo referenciada
import Saudacao from './componentes/Saudacao'
ReactDOM.render(<BomDia nome='guilherme' idade='21'/>, document.getElementById('root'))//pegou o root do html
//passando html como uma funcao no js, nesse caso esta sendo jsx
//parece que esta escrevendo html mas e javascript que sera transcrito na hora da compilacao
/**como seria em jquery
 * $('<h1>').html('react 2')
 * 
 */
ReactDOM.render(
    <div>
        <Saudacao tipo="bom dia" nome="Joao"/>
    </div>,
document.getElementById('root')
)