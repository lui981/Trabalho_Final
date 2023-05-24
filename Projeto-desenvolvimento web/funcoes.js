let notas = [] // Array para armazenar as notas
let nota = []  // Array temporário para criar uma nova nota
let listaNotas = document.querySelector(".lista-notas") // Referência ao elemento HTML que exibirá as notas
let titulo = document.querySelector("#titulo") // Referência ao campo de entrada para o título da nota
let texto = document.querySelector("#texto") // Referência ao campo de entrada para o conteúdo da nota

mostraNotas()

//busca notas gravadas no armazenamento local 
function mostraNotas(){
	notas = JSON.parse(localStorage.notas)
	listaNotas.innerHTML = '' // Limpa o conteúdo atual da lista de notas

	for(let i = 0; i < notas.length; i++){
        // Cria o HTML para exibir cada nota na lista
        listaNotas.innerHTML += `
        <li id="${i}" class="list-group-item">
            <h5 class="font-weight-bold">${notas[i][0]}</h5>
            <p>${notas[i][1]}</p>
            <p>${notas[i][2]}</p>
        </li>
        `
	}
}
// Função para adicionar uma nova nota
function adicionarNota(){
    if(titulo.value == ''){
        alert('titulo não pode ficar em branco')
    }else{
        let data = new Date()
        dataFormatada = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear()
        console.log(dataFormatada) // Adiciona o título, conteúdo e data no array temporário
        nota.push(titulo.value, texto.value, dataFormatada)
        notas.push(nota)// Adiciona o array temporário no array de notas
        localStorage.setItem("notas", JSON.stringify(notas))// Armazena as notas no armazenamento local do navegador
        nota = [] // Limpa o array temporário para a próxima nota
	titulo.value = ''  // Limpa o campo de entrada do título
	texto.value = '' // Limpa o campo de entrada do conteúdo
        console.log(notas)
        mostraNotas() // Chama a função para exibir as notas atualizadas
    }
}
