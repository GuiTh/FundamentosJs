import React from "react";
import { childrenWithProps } from "../utils/utils";


export default props =>
<div>

    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/*{props.children} *contexto de componente funcional... se fosse em um contexto de classe seria this.props.children */}
        {/** 
        {React.cloneElement(props.children, { //nao funciona com mais de um elemento, clona o elemento apontado, pega as propriedades de outro elemento podendo tambem receber seus proprios elementos 
            ...props, ...props.children.props
            })}*/}
    {childrenWithProps(props)}
    </ul>
</div>
//No primeiro caso o nome do filho sera igual esta escrito
//No segundo exemplo o nome e sobrenome do filho sera o mesmo que o do pai pois esta puxando todas as propriedades do Pai sem determinar um valor proprio
//aqui sera carla, aproveitando o props de sobrenome, mesmo sendo determinado um nome depois de referenciar as propriedades o nome ainda sera carla

//PROPS E SOMENTE LEITURA