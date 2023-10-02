class Contatos {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor(){
        this.contatos = []
    }
    adicionarContato(contatos){
        this.contatos.push(contato);
    }
}
exibirContatos() {
    const listaContatos = document.getElementById('contato-lista');

    listaContatos.innerHTML = '';

    for(const contato of this.contatos){
        const li = document.createElement('li');
        li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
        listaContatos.appendChild(li)
    }
}