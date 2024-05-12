function filtro(marca) {

    var todasAsMarcas = document.querySelectorAll('.marcas'); // Aqui, estamos selecionando todos os elementos com a classe 'marcas' e armazenando-os em uma variável.

    todasAsMarcas.forEach(function(marcaAtual) { // Este loop forEach itera sobre cada elemento com a classe 'marcas'.
        var cardsDaMarca = marcaAtual.querySelector('.container-card'); // Aqui, estamos selecionando o elemento com a classe 'cards' dentro de cada elemento com a classe 'marcas'.

        if (marcaAtual.id === marca.toLowerCase() || marca === 'TODOS') { // Verificamos se o ID do elemento atual é igual à marca selecionada (em letras minúsculas) ou se a marca selecionada é 'TODOS'.
            cardsDaMarca.style.display = 'flex'; // Se a condição for verdadeira, exibimos os cards da marca definindo o estilo de exibição como 'flex'.
        } else {
            cardsDaMarca.style.display = 'none'; // Caso contrário, ocultamos os cards da marca definindo o estilo de exibição como 'none'.
        }
    });
}

var button = document.getElementById('btn-continuar');

button.addEventListener('click', function() {
    var card = document.querySelector('.marcas')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return button.textContent = 'FECHAR'
    }

    button.textContent = 'CONTINUAR';
});

document.querySelectorAll('.logo-click').forEach(function(logo) { // Este loop forEach seleciona todas as divs com a classe 'logo-click' e adiciona um ouvinte de eventos de clique a cada uma.
    // Adiciona um ouvinte de eventos de clique a cada div de logo
    logo.addEventListener('click', function() { // Aqui, adicionamos um ouvinte de eventos de clique a cada div com a classe 'logo-click'.
        // Obtém o ID da marca associada à logo clicada
        var marca = this.parentNode.id; // Obtemos o ID do elemento pai da div clicada, que está associado à marca.
        // Chama a função de filtro passando o ID da marca
        filtro(marca); // Chamamos a função de filtro e passamos o ID da marca como argumento.
    });
});

function aceitaMensagem() {
    let divMensagemUsuario = document.getElementById("container-mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
    localStorage.setItem("aceitouCookie", "aceito");
}

let botaoAceitaMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitaMensagem.addEventListener("click", aceitaMensagem);

if(localStorage.getItem("aceitouCookie") == "aceito") {
    aceitaMensagem();
}


