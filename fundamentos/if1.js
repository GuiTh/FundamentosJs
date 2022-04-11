function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('aprovado com' + nota)
    }else{
        console.log('repravado vadio')
    }
}

function seForVerdade(valor){
    if(valor){
        console.log('é verdade ' + valor)
    }else{
        console.log('falso')
    }
}
seForVerdade() //falso
seForVerdade(null)//falso
seForVerdade(undefined)//falso
seForVerdade(NaN)//falso
seForVerdade('')//falso
seForVerdade(' ') //verdadeiro
seForVerdade('?')//verdadeiro
seForVerdade(-1)//verdadeiro
seForVerdade(0)//falso
seForVerdade([])//verdadeiro
seForVerdade([1,2])//verdadeiro
seForVerdade({})//verdadeiro
seForVerdade({nome: 'guilherme'})//verdadeiro
