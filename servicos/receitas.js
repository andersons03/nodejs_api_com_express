const fs = require('fs');

function getTodasAsReceitas(){
  const receitas = JSON.parse(fs.readFileSync('db/receitas.json'));
  return receitas;
}

function getReceitaPorId(id){
  const receitas = getTodasAsReceitas();
  const receitaFiltrada = receitas.filter(receita => receita.id == id)
  return receitaFiltrada[0];
}

function getReceitaPorNome(nome){
  const receitas = getTodasAsReceitas();
  const receitaFiltrada = receitas.filter(receita => receita.name == nome)
  return receitaFiltrada[0];
}

function adicionaReceita(receitaNova){
  if(getReceitaPorNome(receitaNova.name)){
    return false;
  }

  const receitas = getTodasAsReceitas();
  const receitasModificadas = [...receitas, receitaNova]
  fs.writeFileSync('db/receitas.json', JSON.stringify(receitasModificadas));
  return true;
}

module.exports = {
  getTodasAsReceitas,
  getReceitaPorId,
  adicionaReceita
}