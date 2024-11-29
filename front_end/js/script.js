const entrarButton = document.querySelector('#entrar');

// Verifica se o elemento existe antes de adicionar o evento
if (entrarButton) {
    entrarButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../HTML/galeria.html';
    });
} else {
    console.error('Elemento com o ID "entrar" não foi encontrado.');
}
