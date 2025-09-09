'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`;
    const response = await fetch(url);
    const imagens = await response.json();
    return imagens.message;
}

function criarCard(imagem) {
    const container = document.querySelector('.fotos');
    const containerFoto = document.createElement('div');

    containerFoto.classList.add('container-foto', 'glass-card');

    const img = document.createElement('img');
    img.src = imagem;

    container.appendChild(containerFoto);
    containerFoto.appendChild(img);
}

async function mostrarImagens(raca) {
    const imagens = await buscarImagens(raca);

    const container = document.querySelector('.fotos');
    container.innerHTML = '';

    imagens.forEach(imagem => {
        criarCard(imagem);
    });
}



const campoPesquisa = document.querySelector('.campo');
const botaoPesquisa = document.querySelector('.botao');

botaoPesquisa.addEventListener('click', () => mostrarImagens(campoPesquisa.value));