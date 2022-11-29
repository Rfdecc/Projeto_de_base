let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]

function listar() {
    produtos.forEach(p => {
        console.log(p)
    })

}

    function returnEletronico (value) {
        if (value.categoria == "Eletronico")
        return value;
    }
    var eletronicoProducts = produtos.filter(returnEletronico);
    eletronicoProducts.forEach(eletronicoProducts => {
        console.log(eletronicoProducts);
    })
    


    function returnSchool (value) {
        if (value.categoria == "Escolar")
        return value;
    }
    var schoolProducts = produtos.filter(returnSchool);
    schoolProducts.forEach(schoolProducts => {
        console.log(schoolProducts);
    })

    




