


var listaUsuarios = [
    {
        nome: 'joao',
        dataNasc: '02/10/1998',
        sexo: 'M',
        nacionalidade: 'Brasil',
    },

    {
        nome: 'Maria',
        dataNasc: '02/10/2001',
        sexo: 'F',
        nacionalidade: 'Brasil'
    },

    {
        nome: 'joao',
        dataNasc: '02/10/1998',
        sexo: 'M',
        nacionalidade: 'Brasil'
    },

    {
        nome: 'Marcos',
        dataNasc: '02/10/1998',
        sexo: 'M',
        nacionalidade: 'Brasil'
    },

    {
        nome: 'Maria',
        dataNasc: '02/10/2001',
        sexo: 'F',
        nacionalidade: 'Brasil'
    },

    {
        nome: 'joao',
        dataNasc: '02/10/1998',
        sexo: 'M',
        nacionalidade: 'Brasil'
    },
]
    
console.log(listaUsuarios)
window.onload = function () {
   listaUsuarios.forEach(usuario => {
    var tr = document.createElement('tr')

    var td = document.createElement('td')
    td.textContent = usuario.nome
    tr.appendChild(td)

    var td = document.createElement('td')
    td.textContent = usuario.dataNasc
    tr.appendChild(td)
    console.log(tr)

    var td = document.createElement('td')
    td.textContent = usuario.sexo
    tr.appendChild(td)

    var td = document.createElement('td')
    td.textContent = usuario.nacionalidade
    tr.appendChild(td)

    document.getElementsByTagName('tbody')[0].appendChild(tr)
   });
};




