'use strict';
/*
Qual é o problema?
Criar um jogo em que há 3 copos, e o programa aleatoriamente vai colocar 1 pedra em um dos copos
O objetivo do usuário é acertar em qual copo está, caso erre perde pontos, e com um limite de tentativas
Deverá ter 3 níveis de dificuldade, fácil, médio e difícil, ou seja, de acordo com a quantidade copos maior a dificuldade.

Dividir para conquistar
Desenvolver HTML
Desenvolver Estilo
Como serão colocados os 3 copos
Como fazer um programa para aleatoriamente atribuir o valor (pedra)
Desenvolver o sistema de pontos
Desenvolver limite de tentativas
Criar 3 níveis de dificuldade para cada página

*/

const copoSecreto = Math.trunc(Math.random() * 3) + 1;
let vidas = 2;
console.log(copoSecreto);

document.querySelector(".um").addEventListener('click', copoUm);
document.querySelector(".dois").addEventListener('click', copoDois);
document.querySelector(".tres").addEventListener('click', copoTres);

function copoUm() {
    if (copoSecreto === 1) {
        document.querySelector(".mensagem").textContent = '✅ Você encontrou a pedra!';
        document.querySelector("#um").src = "img/pedra-pixelart.png";
        document.querySelector(".dois").removeEventListener('click', copoDois);
        document.querySelector(".tres").removeEventListener('click', copoTres);
    } else {
        if (vidas > 1) {
            vidas--;
            document.querySelector('.vidas').textContent = vidas;
            document.querySelector(".mensagem").textContent = '🚫 Copo errado!';
        } else {
            document.querySelector(".mensagem").textContent = '❌ Você perdeu o jogo!';
            document.querySelector('.vidas').textContent = 0;
            document.querySelector(".um").removeEventListener('click', copoUm);
            document.querySelector(".dois").removeEventListener('click', copoDois);
            document.querySelector(".tres").removeEventListener('click', copoTres);
        }
    }
}

function copoDois() {
    if (copoSecreto === 2) {
        document.querySelector(".mensagem").textContent = '✅ Você encontrou a pedra!';
        document.querySelector("#dois").src = "img/pedra-pixelart.png";
    } else {
        if (vidas > 1) {
            vidas--;
            document.querySelector('.vidas').textContent = vidas;
            document.querySelector(".mensagem").textContent = '🚫 Copo errado!';
        } else {
            document.querySelector(".mensagem").textContent = '❌ Você perdeu o jogo!';
            document.querySelector('.vidas').textContent = 0;
        }
    }
}

function copoTres() {
    if (copoSecreto === 3) {
        document.querySelector(".mensagem").textContent = '✅ Você encontrou a pedra!';
        document.querySelector("#tres").src = "img/pedra-pixelart.png";

    } else {
        if (vidas > 1) {
            vidas--;
            document.querySelector('.vidas').textContent = vidas;
            document.querySelector(".mensagem").textContent = '🚫 Copo errado!';
        } else {
            document.querySelector(".mensagem").textContent = '❌ Você perdeu o jogo!';
            document.querySelector('.vidas').textContent = 0;
        }
    }
}

