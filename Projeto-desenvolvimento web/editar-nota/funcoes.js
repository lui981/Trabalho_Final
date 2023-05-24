
// Função para editar notas
let listaNotas = document.querySelector('.lista-notas')
notas = []
// Chama a função listarNotas para exibir as notas na página
listarNotas()
// Função para listar as notas na página
function listarNotas(){
	 // Obtém as notas armazenadas no localStorage e converte para um array de objetos
	notas = JSON.parse(localStorage.notas)
	  // Limpa o conteúdo da lista de notas
	listaNotas.innerHTML = ''

	// Percorre o array de notas e cria os elementos HTML para exibi-las na página
	for (let i = 0; i < notas.length; i++) {
		// Cria o HTML para exibir cada nota na lista
		listaNotas.innerHTML += `
		<li id="${i}" class="list-group-item">
		  <h5 class="font-weight-bold">
		    <button onclick="editarNota(this)" class="btn bg-success text-white">EDIT</button>
		    ${notas[i][0]}
		  </h5>
		  <p>${notas[i][1]}</p>
		  <p>${notas[i][2]}</p>
		</li>

		`
	}
}

// Função para editar notas
function editarNota(e) {
	const id = e.parentNode.parentNode.id; // Obtém o ID da nota a ser editada
	const notaAtual = notas[id]; // Obtém a nota atual com base no ID
  
	// Exibe um prompt para o usuário digitar o novo título da nota
	const novoTitulo = prompt('Digite o novo título da nota:', notaAtual[0]);
	if (novoTitulo === null) return; // Verifica se o usuário cancelou a ação
  
	// Exibe um prompt para o usuário digitar o novo conteúdo da nota
	const novoConteudo = prompt('Digite o novo conteúdo da nota:', notaAtual[1]);
	if (novoConteudo === null) return; // Verifica se o usuário cancelou a ação
  
	// Atualiza a nota no array de notas com base no ID
	notas[id] = [novoTitulo, novoConteudo, notaAtual[2]];
	localStorage.setItem('notas', JSON.stringify(notas)); // Atualiza os dados no armazenamento local
	listarNotas(); // Atualiza a exibição da lista de notas
  }