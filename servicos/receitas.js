const fs = require('fs');

function getTodasAsReceitas(request, response){
  const receitas = JSON.parse(fs.readFileSync('db/receitas.json'));
  return receitas;
}

module.exports = {
  getTodasAsReceitas
}