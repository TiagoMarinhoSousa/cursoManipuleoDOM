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

export default BotaoConclui;