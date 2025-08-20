const {Router} = require("express");
const {getReceitas, getReceita} = require("../controladores/receitas");

const router = Router();

router.get('/', getReceitas)

router.get('/:id', getReceita)

router.post('/cadastrar', (req,res) => {
  res.send("Lista de post");
})

// router.put('/atualizar', (req,res) => {
//   res.send("Lista de put");
// })

router.patch('/atualizar', (req,res) => {
  res.send("Lista de patch");
})

router.delete('/deletar', (req,res) => {
  res.send("Lista de delete");
})

module.exports = router