( () => {//função criada para que o código não fique dentro do escopo global
const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class=content>${valor}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());//inclui o botão (função Botao conclui) dentro da li (tarefa)
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');//cria botão
    botaoConclui.classList.add('check-button');//adiciona a classe para o botão
    botaoConclui.innerText = 'concluir';//adiciona o texto no botão
    botaoConclui.addEventListener('click', concluirTarefa)//escuta o botão concluir, quando clicado dispara a função
  
    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;//capturamos qual elemento foi clicado
    const tarefaCompleta = botaoConclui.parentElement;//propriedade parentElement para subir um nó na árvore

    tarefaCompleta.classList.toggle('done');//método toggle que vai adicionar a classe done quando clicarmos no botão
}

}) ();