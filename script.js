//FUNÇÃO DE FILTRAGEM, TOPO PÁGINA
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

//BOTÃO (CONTINUAR) FERRARI
var buttonFerrari = document.getElementById('btn-continuarFerrari');

buttonFerrari.addEventListener('click', function() {
    var card = document.querySelector('#ferrari')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonFerrari.textContent = 'FECHAR'
    }

    buttonFerrari.textContent = 'CONTINUAR';
});

//BOTÃO (CONTINUAR) BMW
var buttonBmw = document.getElementById('btn-continuarBmw');

buttonBmw.addEventListener('click', function() {
    var card = document.querySelector('#bmw')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonBmw.textContent = 'FECHAR'
    }

    buttonBmw.textContent = 'CONTINUAR';
});

var buttonFord = document.getElementById('btn-continuarFord');

buttonFord.addEventListener('click', function() {
    var card = document.querySelector('#ford')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonFord.textContent = 'FECHAR'
    }

    buttonFord.textContent = 'CONTINUAR';
});

var buttonVolvo = document.getElementById('btn-continuarVolvo');

buttonVolvo.addEventListener('click', function() {
    var card = document.querySelector('#volvo')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonVolvo.textContent = 'FECHAR'
    }

    buttonVolvo.textContent = 'CONTINUAR';
});

var buttonPeugeot = document.getElementById('btn-continuarPeugeot');

buttonPeugeot.addEventListener('click', function() {
    var card = document.querySelector('#peugeot')
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return buttonPeugeot.textContent = 'FECHAR'
    }

    buttonPeugeot.textContent = 'CONTINUAR';
});

//EFEITO LOGO-CLICK
document.querySelectorAll('.logo-click').forEach(function(logo) { // Este loop forEach seleciona todas as divs com a classe 'logo-click' e adiciona um ouvinte de eventos de clique a cada uma.
    // Adiciona um ouvinte de eventos de clique a cada div de logo
    logo.addEventListener('click', function() { // Aqui, adicionamos um ouvinte de eventos de clique a cada div com a classe 'logo-click'.
        // Obtém o ID da marca associada à logo clicada
        var marca = this.parentNode.id; // Obtemos o ID do elemento pai da div clicada, que está associado à marca.
        // Chama a função de filtro passando o ID da marca
        filtro(marca); // Chamamos a função de filtro e passamos o ID da marca como argumento.
    });
});

//MENSAGEM ACEITA COOKIES
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


