// JSON contendo os usuários que serão inseridos
const usuariosJson = `[
    {
        "nome": "Ana",
        "idade": 23,
        "cpf": "11111"
    },
    {
        "nome": "Carla",
        "idade": 36,
        "cpf": "22222"
    },
    {
        "nome": "Trísia",
        "idade": 21,
        "cpf": "33333"
    },
    {
        "nome": "Karen",
        "idade": 38,
        "cpf": "44444"
    },
    {
        "nome": "Aurora",
        "idade": 14,
        "cpf": "55555"
    }
]`;

// Parse da string JSON para um array de objetos
const usuariosArray = JSON.parse(usuariosJson);

// Criando uma ul e atribuindo-o a uma constante
const listaNomesElement = document.createElement("ul");
// Adiciona a ul em questão no body
document.body.appendChild(listaNomesElement);

// Itera no array, chamando a função "cadastrarUsuario" para cada iteração
for (let usuario of usuariosArray) {
    cadastrarUsuario(usuario.nome, usuario.idade, usuario.cpf);
}

// Função que vai inserir os dados na nossa aplicação
function cadastrarUsuario(nome, idade, cpf) {
    // Criando uma li e atribuindo-o a uma constante
    const liElement = document.createElement("li");
    // Criando um span e atribuindo-o a uma constante
    const spanElement = document.createElement("span");
    
    // Alterando o texto do span com os valores dos objetos
    spanElement.textContent = `Nome: ${nome} | Idade: ${idade} | CPF: ${cpf} `;

    // Criando botão de remover
    const botaoRemoverElement = document.createElement("button");
    botaoRemoverElement.textContent = "X";

    // Função específica para adicionar lógica de exclusão do botão
    adicionarLogicaExclusao(botaoRemoverElement, liElement);

    // Criando botão de edição
    const botaoEditarElement = document.createElement("button");
    botaoEditarElement.textContent = "Edit";

    // Lógica para editar o nome dos usuários
    botaoEditarElement.addEventListener("click", () => {
        const novoNome = prompt("Digite o novo nome:");
        if (novoNome) {
            // Atualiza o texto do span com o novo nome
            spanElement.textContent = `Nome: ${novoNome} | Idade: ${idade} | CPF: ${cpf} `;
            // Adiciona os botões de remover e editar novamente ao span
            spanElement.appendChild(botaoRemoverElement);
            spanElement.appendChild(botaoEditarElement);
        }
    });

    // Adiciona o botão de remover ao span
    spanElement.appendChild(botaoRemoverElement);
    // Adiciona o botão de editar ao span
    spanElement.appendChild(botaoEditarElement);
    // Adiciona o span a li
    liElement.appendChild(spanElement);
    // Por fim, adiciona a li à lista ul
    listaNomesElement.appendChild(liElement);
}

// Função para inserir os dados passados nos inputs
function inserirDados() {
    const inputNomeElement = document.querySelector("#nome");
    const inputIdadeElement = document.querySelector("#idade");
    const inputCpfElement = document.querySelector("#cpf");

    cadastrarUsuario(inputNomeElement.value, inputIdadeElement.value, inputCpfElement.value);
}

// Função dedicada a implementar a lógica de exclusão aos respectivos botões
function adicionarLogicaExclusao(botaoRemover, li) {
    botaoRemover.addEventListener("click", () => {
        li.remove();
    });
}