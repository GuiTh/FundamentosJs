//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('o evento ocorreu!')
} //a funcao pega um elemento e o callback (Onclick) faz com que cada vez que eu clique no elemento um console.log é printado 
 