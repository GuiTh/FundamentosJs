/**Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será 
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número 
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se 
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado */

function numeroRandomico(numeroEscolhido){
    const numeroMinimo = 1;
    const numeroMaxismo = 10;
    let numeroSorteado = Math.floor(Math.random()* (numeroMaxismo - numeroMinimo + 1) + numeroMinimo)
    if(numeroEscolhido === numeroSorteado){
        console.log(`Parabens! O numero sorteado foi o ${numeroSorteado}`)
    }else{
        console.log(`Que pena, o numero sorteado foi o ${numeroSorteado}`)
    }
    return numeroEscolhido
}
console.log(numeroRandomico(10))