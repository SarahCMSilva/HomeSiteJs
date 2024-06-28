const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado Lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "tipo": "apartamento",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponíveis",
                "valor":6
            },
            {
                "chave":"Piscina",
                "valor":"Sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet economico",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipo": "apartamento",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Banheiro",
                "valor":1
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casarão na Floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":10
            },
            {
                "chave":"Quintal",
                "valor":"Muito Grande"
            },
            {
                "chave":"Árvores",
                "valor":"Bastante"
            }
            
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa Branca",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":2
            },
            {
                "chave":"Quintal",
                "valor":"Churrasqueira"
            },]
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casinha",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":1
            },
            ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa Moderna",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":5
            },
            ]
        
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa Velha",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":1
            },
            {
                "chave":"lavanderia",
                "valor":"Nao tem"
            },]
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa Moderna",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":2
            },
            {
                "chave":"Garagem",
                "valor":"Sim"
            },]
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Apartamento",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "tipo": "apartamento",
        "favorito": false,
        "adicionais":[],
        
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Mansão Moderna",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "tipo": "casa",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos",
                "valor":5
            },
            {
                "chave":"Piscina",
                "valor":"Sim"
            },]
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}
function buscarImovelPeloId(id){
    for (let i = 0; i < imoveisDB.length; i++) {
        const imv = imoveisDB [i];
        
        if (imv.id == id) {
            return imv
        }
    }
}