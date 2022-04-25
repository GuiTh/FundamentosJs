/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/
const calculo = function(plano,funcionario){
    switch(plano){
        case 'A':
            return funcionario * 1.1
            break;
        case 'B':
            return funcionario * 1.15
            break;
        case 'C':
            return funcionario * 1.2
            break;
        default:
            return 'numero invalido'
    }
}
console.log(calculo('A', 2000))
console.log(calculo('B', 2000))
console.log(calculo('C', 2000))

