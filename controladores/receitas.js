const {getTodasAsReceitas, getReceitaPorId} = require("../servicos/receitas")

function getReceitas(req,res){
  try {
    const receitas = getTodasAsReceitas();
    res.send(receitas);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getReceita(req,res){
  try {
    const receitaId = req.params.id;
    const receitas = getReceitaPorId(receitaId);
    
    if(receitas === undefined){
      res.status(404);
      res.send("Receita não encontrada");
    }

    res.send(receitas);
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getReceitas,
  getReceita
}