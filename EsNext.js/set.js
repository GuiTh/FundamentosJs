//nao aceita repeticao e nao é indexada
const times = new Set()

times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corintians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel','lucas','julia','lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)