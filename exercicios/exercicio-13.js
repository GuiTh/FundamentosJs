/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/
function diaDasemana(diaDasemana){
switch(diaDasemana){
    case 7:
        console.log("Domingo NÃO é dia util")
        break;
    case 6:
        console.log("Sabado NÃO é dia util")
        break;  
    case 5:
        console.log("Sexta-feira é dia util")
        break;
    case 4:
        console.log("Quinta-feira é dia util")
        break;
    case 3:
        console.log("Quarta-feira é dia util")
        break;
    case 2:
        console.log("Terça-feira é dia util")
        break;
    case 1:
        console.log("Segunda-feira é dia util")
        break;
    default:
        console.log("Data invalida")      
}

}

diaDasemana(7)