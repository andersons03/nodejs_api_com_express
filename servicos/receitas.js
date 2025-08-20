const fs = require('fs');

function getTodasAsReceitas(){
  const receitas = JSON.parse(fs.readFileSync('db/receitas.json'));
  return receitas;
}

function getReceitaPorId(id){
  const receitas = JSON.parse(fs.readFileSync('db/receitas.json'));
  const receitaFiltrada = receitas.filter(receita => receita.id == id)
  return receitaFiltrada[0];
}

module.exports = {
  getTodasAsReceitas,
  getReceitaPorId
}