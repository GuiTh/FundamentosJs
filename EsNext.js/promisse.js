function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        resolve(frase,"abc")
        ),segundos*1000
    })
}

falarDepoisDe(3,"Que legal!")
    .then((frase,abc)=> frase.concat("?!?"))
    .the(outraFrase => console.log(outraFrase))