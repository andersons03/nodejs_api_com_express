const {getTodasAsReceitas, getReceitaPorId, adicionaReceita, atualizaReceita, deletaReceitaPorId} = require("../servicos/receitas")

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

function patchReceitas(req,res){
  try {
    const receitaId = req.params.id;
    const receitaBody = req.body;

    atualizaReceita(receitaId, receitaBody);
    res.status(200).send("Receita atualziada com sucesso!")
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function deleteReceita(req,res){
  try {
    const receitaId = Number(req.params.id);
    deletaReceitaPorId(receitaId);
    return res.status(200).send("Receta deletada");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getReceitas,
  getReceita,
  postReceita,
  patchReceitas,
  deleteReceita
}