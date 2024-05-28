const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/play', (req, res) => {
  const { escolha, numero } = req.body;

  
  const num = parseInt(numero);

 
  const isEven = num % 2 === 0;
  let result;

  if ((escolha === 'par' && isEven) || (escolha === 'impar' && !isEven)) {
    result = 'Você venceu!';
  } else {
    result = 'Você perdeu!';
  }

  
  res.send(result);
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
