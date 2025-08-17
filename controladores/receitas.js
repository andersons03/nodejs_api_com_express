function getReceitas(req,res){
  try {
    res.send("Lista de get");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getReceitas
}