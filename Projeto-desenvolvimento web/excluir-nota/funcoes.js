// Função para excluir nota
let listaNotas = document.querySelector('.lista-notas');
notas = [];

// Chama a função listarNotas para exibir as notas na página
listarNotas();

// Função para listar as notas na página
function listarNotas() {
  // Obtém as notas armazenadas no localStorage e converte para um array de objetos
  notas = JSON.parse(localStorage.notas);

  // Limpa o conteúdo da lista de notas
  listaNotas.innerHTML = '';

  // Percorre o array de notas e cria os elementos HTML para exibi-las na página
  for (let i = 0; i < notas.length; i++) {
    listaNotas.innerHTML += `
      <li id="${i}" class="list-group-item">
        <h5 class="font-weight-bold">
          <button onclick="deletarNota(this)" class="btn bg-danger text-white">DEL</button>
          ${notas[i][0]}
        </h5>
        <p>${notas[i][1]}</p>
        <p>${notas[i][2]}</p>
      </li>
    `;
  }
}

// Função para excluir uma nota
function deletarNota(e) {
  // Exibe um diálogo de confirmação para o usuário
  if (confirm('Tem certeza que deseja excluir esta nota?') === true) {
    // Obtém as notas armazenadas no localStorage e converte para um array de objetos
    notas = JSON.parse(localStorage.notas);

    // Remove a nota selecionada do array de notas usando o índice fornecido
    notas.splice(e.parentElement.parentElement.id, 1);

    // Atualiza as notas no localStorage convertendo o array para uma string JSON
    localStorage.setItem("notas", JSON.stringify(notas));

    // Chama a função listarNotas para atualizar a lista exibida na página
    listarNotas();
  }
}
