let isAtivo = false

isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(!!isAtivo);

console.log('numeros verdadeiros');
console.log(!!3);
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo =true))

console.log('numeros falsos');
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar")
console.log(!!('' || null || 0 || 'epa'))

let nome = `lucas`
console.log(nome || `desconhecido`)
