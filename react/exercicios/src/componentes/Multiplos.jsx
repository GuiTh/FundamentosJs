import React from "react";


//quando se exporta por padrao com export default, normalmente voce ceolcoa uma funcao anonima sem nome que vai ser retornada quando for importada
//se for exportar algo sem default tem que determinar a funcao com const,let ou var
export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = propst => <h1>Boa Noite {propst.nome}</h1>
//posso exportar como default tambe, tirando o BoaTarde do desconstruct
export default {BoaTarde,BoaNoite} 
//tambem posso dar export sem o default
//export {BoaTarde,BoaNoite}