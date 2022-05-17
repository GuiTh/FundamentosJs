import React from "react";

//passando parametros para strings
/*desse jeito nao posso passar 2 tags no mesmo componente, o unico jeito sera colocar tudo dentro de uma tag div
*/
// export default props => 
// <div>
// <h1> bom dia {props.nome}, voce tem {props.idade} anos, ne?</h1>
// <h2> Ate breve</h2>
// </div>

/**
 * posso tambem selecionar a div e colocar React.fragment
 * o .Fragment renderiza os elementos sem precisar envolver eles em uma div
 */

// export default props =>
// <Fragment>
//     <h1>Bom dia</h1>
//     <h2>Ate breve</h2>
// </Fragment>
/**
 * outra possibilidade e colocar os elementos dentro de um array separado por virgula
 */
//para usar array desse jeito deve ser usado uma propriedade chamada Key, para que o react ache os elementos de uma forma mais otimizada dentro da DOM
export default props => [
    <h1 key='h1'> Bom dia {props.nome}</h1>, //separei os elementos por virgula
    <h2 key='h2'>ate breve</h2>
]
/**
 * o melhor metodo e usar uma div ou o fragment
 */