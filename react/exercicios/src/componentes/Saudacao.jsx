import React,{Component} from "react";

export default class Saudacao extends Component{ //a classe saudacao esta sendo exportada por padrao
        //dentro de todo componente de classe tem um atributo chamado state que pode ser alterado
        state = {
            tipo:this.props.tipo,
            nome:this.props.nome
        }

        constructor(props){
            super(props)

            this.setTipo = this.setTipo.bind(this)
        }
    //trabalhando com evento
    setTipo(e){
      this.setState({tipo: e.target.value})//setState é uma funcao que serve para alterar o estado de algo que voce referencia, estado = valor
    }


    setNome(e){
        this.setState({nome: e.target.value})
    }
    render(){//espero receber dois parametros nessa funcao, a primeira é o tipo do dia(manha,tarde,noite) o outro o nome
        const {tipo,nome} = this.state//referencia o objeto atual, referencia a instancia que foi criada
        return(
            <div>
                <h1>{tipo}{nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={ nome} onChange={e =>this.setNome(e)}/>
            </div>
            //esses inputs sao apenas de leitura, o valor nao pode ser alterado
        )
    }
}
/**temos um input associado ao nome que recebeu um valor inicial, o nome é pedro e o tipo é fala
 * esse nome e tipo é o estado atual dos elementos, a funcao setTipo ira mudar o estado do tipo ou do nome
 * O ESTADO TEM A VERDADE ABSOLUTA, O DADO QUE ESTA DENTRO DO ESTADO É O DADO VERDADEIRO
*/
