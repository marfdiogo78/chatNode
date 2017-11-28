module.exports.chatGet = (application, req, res) => {
  const dadosForm = req.body;

  req.assert('nome', 'Nome obrigatório').notEmpty();
  req.assert('nome', 'Nome deve conter entre 3 e 15 caracteres').len(3, 15);

  const errors = req.validationErrors();

  if (errors) {
    res.render('index', { validation: errors });
    return;
  }

  application.get('io').emit(
    'msgParaCliente',
    {
      nome: dadosForm.nome,
      mensagem: 'Acabou de entrar no chat'
    }
  )

  res.render('chat', { dadosForm: dadosForm });
}