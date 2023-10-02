class Contatos {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }
    adicionarContato(contatos) {
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');

        listaContatos.innerHTML = '';

        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
            listaContatos.appendChild(li)
        }
    }
}
const gerenciadorContatos = new gerenciadorContatos('contato-form');
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mostrarContatos = document.getElementById('mostrar-contatos')
const ocultarContatos = document.getElementById('ocultar-contatos')
const listaContatos = document.getElementById('contato-lista')

contatoForm.addEventListener('submit', (event) => {
    
})