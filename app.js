const express = require('express');
const router = require('./routes/receitas.js')

const app = express();
const port = 8000;

app.use('/receitas', router)

app.listen(port, () => {
  console.log('Ounvindo a porta', port);
})