document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const escolha = document.getElementById('escolha').value;
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(numero)) {
        resultadoDiv.textContent = 'Por favor, insira um número válido.';
        return;
    }
    
    const isPar = numero % 2 === 0;
    const resultado = isPar ? 'par' : 'ímpar';
    const ganhou = (escolha === resultado);
    
    resultadoDiv.textContent = `O número ${numero} é ${resultado}. Você ${ganhou ? 'ganhou' : 'perdeu'}!`;
});