let numeroSecreto = parseInt(Math.random() * 10);
console.log(numeroSecreto);
let tentativas = 1;

alert('Olá, jogador! Boas vindas ao jogo do número secreto.');

let numeroChute = prompt('Tente adivinhar o número secreto: ');

while(numeroChute != numeroSecreto) {
    if(numeroChute == numeroSecreto) {
        break;
    } else {
        numeroChute > numeroSecreto ? alert(`O número secreto é menor do que ${numeroChute}`) : alert(`O número secreto é maior do que ${numeroChute}`);
        numeroChute = prompt("Tente novamente")
        tentativas ++;
    }
}

let variacaoPalavra = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto com ${tentativas} ${variacaoPalavra}`);