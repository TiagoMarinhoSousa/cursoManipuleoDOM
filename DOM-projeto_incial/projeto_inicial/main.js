// ( () => {//função criada para que o código não fique dentro do escopo global
import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    const criarTarefa = (evento) => {

        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class=content>${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui()); //inclui o botão (função Botao conclui) dentro da li (tarefa)
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        input.value = " ";
    }

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);
//  ();