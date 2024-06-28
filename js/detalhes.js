function buscarImovel(){
    const urlPagina = window.location.href
    const id = urlPagina.split("=")[1]
    const imvDetalhe = buscarImovelPeloId(id)

    atualizarImovel(imvDetalhe)
    
}

function atualizarImovel(imovel){
    const imgImv = document.getElementById("img")
    imgImv.setAttribute("src",imovel.url_foto)
    const tituloImv = document.getElementById("titulo")
    tituloImv.textContent = imovel.nome

    const localImv = document.getElementById("local")
    localImv.textContent = `${imovel.cidade} - ${imovel.estado}`

    const adicionais = imovel.adicionais
    const ul = document.getElementById("lista-adicionais")

    if(adicionais.length == 0){
        const li = document.createElement("li")
        li.textContent = "Sem adiconais para o imovel"
        ul.appendChild(li)
        
    }


    for (let i = 0; i < adicionais.length; i++) {
        const adicional = adicionais[i]
        const chave = adicional.chave
        const valor = adicional.valor

        const li = document.createElement("li")
        li.textContent = `${chave}: ${valor}`
        ul.appendChild(li)
        
    }
    

    
}
