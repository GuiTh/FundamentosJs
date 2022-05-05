/**
 * classe tambem é convertida para funcao
 */
class Lancamento{
    constructor(nome = 'generico', valor=0){ /* funcao chamada por padrao no momento em que a classe for instanciada usando o New
                                                sua classe se torna uma funcao construtora com os parametrosd que voce determina dentro do constructor
                                                */
        this.nome = nome
        this.valor = valor
    } 
}

class CicloFinanceiro{
    constructor(mes, ano){ //determinou os parametros da classe 
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){ // com esse parametro eu posso declarar quantos paranetros quiser na hora de chamar a funcao
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado+= l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 936)//aqui chamou a classe lancamento e atribuiu valor aos parametros da funcao construtora nome e valor
const contaNubank = new Lancamento("credito do nubank", -512)
const contaPicPay = new Lancamento("credito do picpay", -442)
const contaMercadoPago = new Lancamento("credito do mercado pago", -100)
const cartaVT = new Lancamento("cartao top VT", -120)

const contas = new CicloFinanceiro(6,2016) //aqui chamou a classe ciclofinanceiro e atribuiu valor aos parametros da funcao construtora mes e ano

contas.addLancamentos(salario, contaMercadoPago,contaNubank,contaPicPay,cartaVT)
console.log(contas.sumario())