'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images/`;
    const response = await fetch(url);
    const imagens = await response.json();
    console.log(imagens.message);
    return imagens.message;
}

buscarImagens('African');