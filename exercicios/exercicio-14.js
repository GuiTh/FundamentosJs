/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function fruta(fruta){
    switch(fruta){
        case "maçã":
            console.log("nao vendemos maçã nesse estabelecimento cristão")
            break;
        case "kiwi":
            console.log("tamo sem kiwi")
            break;
        case "melancia":
            console.log("Aqui esta, sao 3 reais o quilo")
            break;
        default:
            console.log('digite uma fruta valida')
    }
}

fruta("kiwi")