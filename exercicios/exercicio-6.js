/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (capital, taxa, tempo) => {
    return capital + (capital * taxa * tempo);
}

const jurosComposto = (capital, taxa, tempo) => {
    return capital * (1 + taxa) ** tempo;
}

console.log("Juros Simples: " + jurosSimples(100, 10 / 100, 2).toFixed(2));
console.log("Juros Composto: " + jurosComposto(100, 10 / 100, 2).toFixed(2));