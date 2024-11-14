// Json contendo os usuários que serão automaticamente inseridos
const usuariosJson = { // Verificar se está realmente como um json
    "usuarios": [
        {"nome": "Lola", "idade": 23, "cpf": "12345"},
        {"nome": "Ashley", "idade": 26, "cpf": "78910"},
        {"nome": "Aurora", "idade": 21, "cpf": "13579"}
    ]
};

// Criando uma ul e atribuindo-o a uma constante
const listaNomesElement = document.createElement("ul");
// Adiciona a ul em questão no body
document.body.appendChild(listaNomesElement);

// Itera no Json, chamando a função "inserirDados" para cada iteração, passando como argumento da função os atributos de cada objeto
for (let usuario of usuariosJson.usuarios) {
    cadastrarUsuario(usuario.nome, usuario.idade, usuario.cpf);
}

// Função que vai inserir os dados na nossa aplicação
function cadastrarUsuario(nome, idade, cpf) {
    // Criando uma li e atribuindo-o a uma constante
    const liElement = document.createElement("li");
    // Criando um span e atribuindo-o a uma constante
    const spanElement = document.createElement("span");
    
    // Alterando o texto do span com os valores dos objetos
    spanElement.textContent = spanElement.textContent = `Nome: ${nome} | Idade: ${idade} | CPF: ${cpf} `

    // Criando botão de remover
    const botaoRemoverElement = document.createElement("button");
    // Alterando o texto/conteúdo do botão
    botaoRemoverElement.textContent = "X";

    // Função específica para adicionar lógica de exclusão do botão, sem necessariamente fazer a implementação dentro da função que alimenta o app
    adicionarLogicaExclusao(botaoRemoverElement, liElement);

    // Criando botão de edição
    const botaoEditarElement = document.createElement("button");
    botaoEditarElement.textContent = "Edit";

    // Lógica para editar o nome dos usuários
    botaoEditarElement.addEventListener("click", () => {
        const novoNome = prompt(); // Abre um prompt solicitando o novo nome (simulando um modal)
        spanElement.remove();
        
        // Altera o conteúdo da span contendo o nome lido pelo prompt
        spanElement.textContent = `Nome: ${novoNome} | Idade: ${idade} | CPF: ${cpf} `;

        // Atualiza a li
        liElement.appendChild(spanElement);
    })

    // Adiciona o botão de remover ao span
    spanElement.appendChild(botaoRemoverElement);
    // Adiciona o botão de editar ao span
    spanElement.appendChild(botaoEditarElement);
    // Adiciona o span a li
    liElement.appendChild(spanElement);
    // Por fim, adiciona a li, contendo a span, que, por sua vez, também contém o botão de remover, a ul
    listaNomesElement.appendChild(liElement);
}

// Função que vai inserir os dados passados nas inputs
function inserirDados() {
    const inputNomeElement = document.querySelector("#nome");
    const inputIdadeElement = document.querySelector("#idade");
    const inputCpfElement = document.querySelector("#cpf");

    cadastrarUsuario(inputNomeElement.value, inputIdadeElement.value, inputCpfElement.value);
}

// Função dedicada a apenas impelementar a lógica de exclusão aos respectivos botões
function adicionarLogicaExclusao(botaoRemover, li) {
    botaoRemover.addEventListener("click", () => {
        li.remove();
    })
}