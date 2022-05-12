/**Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá 
ser de duas casas decimais, arredondando se necessário */

function calculaArea(base, altura){
    let area = (base * altura) / 2
    return area.toFixed(2)
}
console.log(calculaArea(10,15))