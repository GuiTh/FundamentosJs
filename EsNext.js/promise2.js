//callback hell, callbacks que chamam callbacks
// setTimeout(function(){
//     console.log('executando callback')
//     setTimeout(function(){
//         console.log('executando callback')
//         setTimeout(function(){
//             console.log('executando callback')
            
//         },2000)
//     }, 2000)
// },2000)


// o mesmo exemplo só que em promises, evitando callbacks
function esperarPor (tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando')
            resolve('vishhhh')
        },tempo)
    })
}

esperarPor(3000)
.then(() => esperarPor())
.then(esperarPor)
