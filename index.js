const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola soy el server de Express');
});

app.get('/page2', (req, res) => {
  res.send('Soy la pagina DOS');
});

app.listen(port, () => {
  console.log('Port' + port);
});

routerApi(app);
