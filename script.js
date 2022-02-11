// seletores
const input = document.querySelector('#carta-texto');
const enviar = document.querySelector('#criar-carta');
const carta = document.querySelector('#carta-gerada');
const spans = document.getElementsByTagName('span');
const contador = document.querySelector('#carta-contador');

// funções

let palavras = 0;
let contagem = contador.innerText = 'Palavras:' + ' ' + palavras;

let estilo = ['magazine1', 'magazine2', 'newspaper'];
let tamanho = ['medium', 'big', 'reallybig'];
let rotacao = ['rotateleft', 'rotateright'];
let inclinacao = ['skewleft', 'skewright'];

function estilin() {
  let estiloR = estilo[Math.ceil(Math.random() * estilo.length - 1)];
  return estiloR;
}

function tamanin() {
  let tamanhoR = tamanho[Math.ceil(Math.random() * tamanho.length - 1)];
  return tamanhoR;
}

function rodadin() {
  let rotacaoR = rotacao[Math.ceil(Math.random() * rotacao.length - 1)];
  return rotacaoR;
}

function inclinadin() {
  let inclinacaoR = inclinacao[Math.ceil(Math.random() * inclinacao.length - 1)];
  return inclinacaoR;
}

function escrever() {
  palavras = 0
  carta.innerHTML = '';

  if (input.value === ' ' || input.value === '') {
    let teste = document.createElement('span');
    teste.innerText = 'Por favor, digite o conteúdo da carta.';
    carta.appendChild(teste);

  } else if (input.value !== ' ' || input.value === '') {
    carta.innerHTML = '';
    stilus();


  }
}

function stilus() {
  let splitar = input.value.split(' ');

  for (let i of splitar) {
    let palavra = document.createElement('span');
    palavra.className += rodadin();
    palavra.className += ' ' + estilin();
    palavra.className += ' ' + tamanin();
    palavra.className += ' ' + inclinadin();
    palavra.innerText = i;
    palavras += 1;
    contagem = contador.innerText = 'Palavras:' + ' ' + palavras;
    carta.appendChild(palavra);
    const spans = document.getElementsByTagName('span')
    for (let i of spans) {
      i.addEventListener('click', randomizar);
    }
  }
}

function randomizar(event) {
  event.target.className = '';
  event.target.classList.add(rodadin(), estilin(), tamanin(), inclinadin());
}



// listeners
enviar.addEventListener('click', escrever);