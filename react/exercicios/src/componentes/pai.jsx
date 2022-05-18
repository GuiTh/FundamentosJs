import React from "react";
import Filho from './filho'
export default props =>
<div>

    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        <Filho nome="pedro" sobrenome={props.sobrenome}/> 
        <Filho {...props}/>  
        <Filho {...props} nome="Carla"/> 
    </ul>
</div>
//No primeiro caso o nome do filho sera igual esta escrito
//No segundo exemplo o nome e sobrenome do filho sera o mesmo que o do pai pois esta puxando todas as propriedades do Pai sem determinar um valor proprio
//aqui sera carla, aproveitando o props de sobrenome, mesmo sendo determinado um nome depois de referenciar as propriedades o nome ainda sera carla

//PROPS E SOMENTE LEITURA