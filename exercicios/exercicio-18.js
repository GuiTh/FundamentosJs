/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.*/
const numero = function(numero){
    switch(numero){
        case 10:
            return 'Dez'
            break;
        case 9:
            return 'Nove'
            break;
        case 8:
            return 'Oito'
            break;
        case 7:
            return 'Sete'
            break;
        case 6:
            return 'Seis'
            break;
        case 5:
            return 'Cinco'
            break;
        case 4:
            return 'Quatro'
            break;
        case 3:
            return 'Tres'
            break;
        case 2:
            return 'Dois'
            break;
        case 1:
            return 'Um'
            break;
        case 0:
            return 'Zero'
            break;
        default:
            return 'numero invalido'
    }
}

console.log(numero(10))