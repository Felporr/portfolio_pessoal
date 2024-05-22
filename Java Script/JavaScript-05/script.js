let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];

let prateleira = document.querySelectorAll('#wrap input')[3];
let descricao = document.querySelectorAll('#wrap input')[4];
let categoria = document.querySelectorAll('#wrap input')[5];

let editID = -1

let tabela = document.querySelector('#saida table');
let BD = [];

// Função para verificar campos vazios
function camposVazios() {
    if (
        nome.value.trim() == '' ||
        quantidade.value.trim() == '' ||
        preco.value.trim() == '' ||
        prateleira.value.trim() == '' ||
        descricao.value.trim() == '' ||
        categoria.value.trim() == ''
    ) {
        return true;
    }
    return false;
}

// Função para atualizar tabela
function atualizarTabela() {
    tabela.innerHTML = `<tr>
                            <td width="30px"></td>
                            <td>Nome</td>
                            <td>Quant.</td>
                            <td>Preço</td>
                            <td>Prateleira</td>
                            <td>Descrição</td>
                            <td>Categoria</td>
                        </tr>`;
    for (let i = 0; i < BD.length; i++) {
        tabela.innerHTML += `<tr>
                                <td width="30px">
                                    <input type="checkbox" onclick="changeEditID(${i})">
                                </td>
                                <td>${BD[i].nome}</td>
                                <td>${BD[i].quantidade}</td>
                                <td>${BD[i].preco}</td>
                                <td>${BD[i].prateleira}</td>
                                <td>${BD[i].descricao}</td>
                                <td>${BD[i].categoria}</td>
                            </tr>`;
    }
}

// Adiciona um evento para verificar campos vazios ao digitar
nome.addEventListener('input', verificarCampos);
quantidade.addEventListener('input', verificarCampos);
preco.addEventListener('input', verificarCampos);
prateleira.addEventListener('input', verificarCampos);
descricao.addEventListener('input', verificarCampos);
categoria.addEventListener('input', verificarCampos);

// Função para verificar campos vazios ao digitar
function verificarCampos() {
    if (camposVazios()) {
        btnEnviar.disabled = true;
    } else {
        btnEnviar.disabled = false;
    }
}

// Função para adicionar produto
btnEnviar.onclick = function () {

    if (camposVazios()) {
        alert("Adicione informções em todos os campos");
        return;
    }

    let produto = {
        nome: nome.value,
        quantidade: quantidade.value,
        preco: preco.value,
        prateleira: prateleira.value,
        descricao: descricao.value,
        categoria: categoria.value,
        id: BD.length
    };

    BD.push(produto);
    atualizarTabela();
};

// Restante do código permanece igual
btnExcluir.onclick = function () {
    BD.splice(editID,1)
    atualizarTabela();
};

function changeEditID(id) {
    editID = id

    nome.value = BD[editID].nome;
    quantidade.value = BD[editID].quantidade;
    preco.value = BD[editID].preco;
    prateleira.value = BD[editID].prateleira;
    descricao.value = BD[editID].descricao;
    categoria.value = BD[editID].categoria;
}

btnEditar.onclick = function () {

    let produto = {
        nome: nome.value,
        quantidade: quantidade.value,
        preco: preco.value,
        prateleira: prateleira.value,
        descricao: descricao.value,
        categoria: categoria.value,
        id: BD.length
    };

    BD[editID] = produto
    atualizarTabela();
};

function verificar() {
    let cont = 0;
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.getElementById(i.toString());
        if (elemento.checked) {
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            prateleira.value = BD[i].prateleira;
            descricao.value = BD[i].descricao;
            categoria.value = BD[i].categoria;

            cont++;
            if (cont > 1) {
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
        }
    }
}
