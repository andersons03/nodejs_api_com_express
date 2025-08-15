const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, resp) => {
  resp.send('Olá mundo!');
})

app.listen(port, () => {
  console.log('Ounvindo a porta', port);
})