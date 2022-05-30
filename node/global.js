console.log(global)
global.MinhaApp = {
    saudacao(){
        return 'im everywhere'
    },
    nome: 'sistema legal'
}//atribuindo um valor ao escopo global podendo usar ele em qualquer modulo que importar o global
//esse metodo nao é recomendado, o melhor a se fazer é usar o module.exports