let index = 0;

function slideShow() {
    const imagens = document.querySelector('.imagensListas');
    const totalImagens = document.querySelectorAll('.imagensListas img').length;

    index++;

    if (index >= totalImagens) {
        index = 0;
    }

    imagens.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(slideShow, 3000); // Troca a imagem a cada 3 segundos
