 for(let letra of 'guilherme'){
     console.log(letra)
 }

 const assuntosEcma = ['map','set','promise']
 for( let i in assuntosEcma){
     console.log(i)
 }

 for(let j of assuntosEcma){
     console.log(j)
 }
 const assuntosAbordados = new Map([
     ['map', {abordado:true}],
     ['set',{abordado:true}],
     ['promise',{abordado:false}]
 ])

 for(let assunto of assuntosAbordados){
     console.log(assunto)
 }

 for (let chave of assuntosAbordados.keys()){
     console.log(chave)
 }
 for(let valor of assuntosAbordados.values()){
     console.log(valor)
 }
 for(let [chave,valor]of assuntosAbordados.entries()){
     console.log(chave,valor)
 }

 const s = new Set(['a','b','c'])
 for (let letra of s){
     console.log(letra)
 }