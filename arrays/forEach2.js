Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.lenght; i++){
        callback(this[i], i)
    }
}

const aprovados = ['agatha', 'aldo', 'daniel','raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})
