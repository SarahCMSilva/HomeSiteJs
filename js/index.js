let imoveis = buscarTodosImoveis()


if (window.localStorage.getItem("lista") == null) {
    window.localStorage.setItem("lista", JSON.stringify(imoveis))
} else {
    imoveis = JSON.parse(window.localStorage.getItem("lista"))
}

function criarImovelHTML(imovel) {
    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)

    section.appendChild(img)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome

    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("class", "listing-location")
    p.textContent = `${imovel.cidade}, ${imovel.estado}`

    section.appendChild(p)

    const a = document.createElement("a")
    a.textContent = "Veja mais"

    const url = `detalhes.html?imovelId=${imovel.id}`
    a.setAttribute("href", url)

    section.appendChild(a)

    const favId = `fav-${imovel.id}`

    const favorito = document.createElement("img")
    favorito.setAttribute("id", favId)

    if (imovel.favorito == true) {
        favorito.setAttribute("src", "img/favorito.png")

    } else if (imovel.favorito == false) {
        favorito.setAttribute("src", "img/favorito.png")
    }

    favorito.setAttribute("id", favId)
    favorito.setAttribute("src", "img/desfavorito.png")
    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)
    section.appendChild(favorito)

    // Section pai
    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)
}

function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listarImoveisComFiltro(pesquisa)
}
// script.js

const filtroCasa = document.getElementById('filtro-casa');
const filtroApartamento = document.getElementById('filtro-apartamento');
const listaImoveis = document.getElementById('lista-imoveis');

function filtrarImoveis() {
    // listaImoveis.innerHTML = ''; // Limpa o conteúdo atual da lista de imóveis
    limparListaImoveis()
    // Verifica se os checkboxes de filtro estão marcados
    const mostrarCasa = filtroCasa.checked;
    const mostrarApartamento = filtroApartamento.checked;

    // Verifica se ambos os checkboxes estão desmarcados
    if (!mostrarCasa && !mostrarApartamento) {
        mostrarTodosOsImoveis(); // Se nenhum estiver marcado, mostra todos os imóveis
    } else {
        // Caso contrário, filtra os imóveis com base nos checkboxes marcados
        imoveis.forEach(imovel => {
            if ((imovel.tipo === 'casa' && mostrarCasa) || (imovel.tipo === 'apartamento' && mostrarApartamento)) {
                criarImovelHTML(imovel); // Cria HTML para cada imóvel que corresponde ao filtro
            }
        });
    }
}

// Adiciona listeners de evento para os checkboxes de filtro
filtroCasa.addEventListener('change', filtrarImoveis);
filtroApartamento.addEventListener('change', filtrarImoveis);

// Chama a função inicialmente para exibir os imóveis conforme os filtros atuais
filtrarImoveis();

// Chamar a função para exibir os imóveis inicialmente
filtrarImoveis();

function mostrarTodosOsImoveis() {
    imoveis.forEach(imovel => {
        criarImovelHTML(imovel);
    });
}


function favoritar(imovel) {
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)
    const posicaoLista = imovel.id - 1

    if (fav.getAttribute("src") == "img/favorito.png") {
        fav.setAttribute("src", "img/desfavorito.png")
        imoveis[posicaoLista].favorito = false
    } else {
        fav.setAttribute("src", "img/favorito.png")
        imoveis[posicaoLista].favorito = true
    }
    window.localStorage.setItem("lista", JSON.stringify(imoveis))

}

function mostrarFavoritos() {
    limparListaImoveis()


    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        if (imovel.favorito == true) {
            criarImovelHTML(imovel)
        }

    }
}



function filtrarComEnter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar()
    }
}

function listarImoveisComFiltro(texto) {

    limparListaImoveis()

    if (texto == "") {
        mostrarTodosOsImoveis()
    } else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]

            const textoM = removerAcentos(texto.toUpperCase())
            const cidadeImovelM = removerAcentos(imovel.cidade.toUpperCase())
            const estadoImovelM = removerAcentos(imovel.estado.toUpperCase())

            if (cidadeImovelM.search(textoM) == 0 ||
                estadoImovelM.search(textoM) == 0) {
                criarImovelHTML(imovel)
            }
        }
    }
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarTodosOsImoveis() {
    // limparListaImoveis()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]
        criarImovelHTML(imovel)
    }
}

function limparListaImoveis() {
    const sectionResults = document.getElementById("lista-imoveis")

    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}


mostrarTodosOsImoveis()