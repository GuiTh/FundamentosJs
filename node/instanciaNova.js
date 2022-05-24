//uma factoru retorna uma nova instancia de objeto

module.exports = () => {
    return {
        valor:1,
        inc(){
            this.valor++
        }
    }
}