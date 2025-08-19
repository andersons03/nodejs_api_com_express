const {getTodasAsReceitas} = require("../servicos/receitas")

function getReceitas(req,res){
  try {
    const receitas = getTodasAsReceitas();
    res.send(receitas);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getReceitas
}