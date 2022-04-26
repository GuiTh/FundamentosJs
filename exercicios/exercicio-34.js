/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */

function string (str1, str2) {
    let estaContido = true;
    for (let i = 0; i < str1.length; i++) {
        let caracterestr1 = str1.charAt(i).toLowerCase()
        for(let j = 0; j < str2.length; j++){
            let caracterestr2 = str2.charAt(j).toLowerCase()
            if(caracterestr1 == caracterestr2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(string('abc','cba'))