var express = require('express');
var router = express.Router();
const postagem = require('../models/postagem');

const STATUS = {
  sucesso: 'Postagem inserida com sucesso.',
  falha: 'Ocorreu um erro na inserção da postagem.'
};

router.get('/', function(req, res) {
  
  postagem.listar().then(dados => {
    res.json(dados);
  }).catch(erro => {
    res.json(erro);
  });

});

router.get('/:id', function(req, res) {
  const id = req.params.id;

  postagem.consultarPorId(id).then(dados => {
    res.json(dados);
  }).catch(erro => {
    res.json(erro);
  });

});

router.put('/:id', function(req, res) {
  const id = req.params.id;
  const dados = req.body;

  postagem.atualizar(id, dados).then(dados => {
    res.json(dados);
  }).catch(erro => {
    res.json(erro);
  });

});

router.post('/', (req, res) => {

  const dados = req.body;

  postagem.inserir(dados).then(() => {
    res.json({status: STATUS.sucesso});
  }).catch(() => {
    res.json({status: STATUS.sucesso});
  });

});

module.exports = router;