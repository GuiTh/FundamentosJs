const colors ={
    p: "#388e3c",
    div: '#1565c0',
    span: '#e53935',
    section: "#f67809",
    ul:"#5e35b1",
    ol: "#fbc02d",
    header: '#d81b60',
    nav: "#64dd17",
    main:"#00acc1",
    footer: "#304ffe",
    form:'#9f6581',
    body:'#25b6da',
    padrao:'#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }

}

//elemento marcado com a classe css .tag
document.querySelector('.tag').forEach(elemento =>{
    // pegou o nome do elemento marcado com a classe .tag
    const tagName = elemento.tagName.toLowerCase()
    //aplicou estilo em cima dele
    elemento.style.bordercolor = colors.get(tagName)    //e, se ele NAO estiver marcado como noLabel
    if(!elemento.classlist.contains('nolabel')){
        //ele adiciona um label dentro do elemento
        //antes de qualquer elemento filho dentro do elemento pai ele cria um labem em cada um
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})