const {getTodasAsReceitas, getReceitaPorId, adicionaReceita} = require("../servicos/receitas")

function getReceitas(req,res){
  try {
    const receitas = getTodasAsReceitas();
    res.send(receitas);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getReceita(req,res){
  try {
    const receitaId = req.params.id;
    const receitas = getReceitaPorId(receitaId);
    
    if(receitas === undefined){
      res.status(404).send("Receita não encontrada");
    }

    res.send(receitas);
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postReceita(req,res){
  try{
    const receitaNova = req.body
    const respostaPost = adicionaReceita(receitaNova);

    if(respostaPost === false){
      return res.status(409).send("Receita já cadastrada");
    }

    res.status(201).send("Receita adionada com sucesso");
  }catch(error){
    res.status(500).send(error.message);
  }
}

module.exports = {
  getReceitas,
  getReceita,
  postReceita
}