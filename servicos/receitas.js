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

function atualizaReceita(id, receitaAtualizada){
  // console.log(id, receita);
  let receitas = getTodasAsReceitas();
  const receitaIndex = receitas.findIndex(receita => receita.id == id);
  const receitaModificada = {...receitas[receitaIndex], ...receitaAtualizada}
  receitas[receitaIndex] = receitaModificada;

  fs.writeFileSync('db/receitas.json', JSON.stringify(receitas));
}

function deletaReceitaPorId(id){
  const receitas = getTodasAsReceitas();

  const receitasFiltradas = receitas.filter(receita => receita.id !== id)

  console.log(receitasFiltradas);
  fs.writeFileSync('db/receitas.json', JSON.stringify(receitasFiltradas));
}

module.exports = {
  getTodasAsReceitas,
  getReceitaPorId,
  adicionaReceita,
  atualizaReceita,
  deletaReceitaPorId
}