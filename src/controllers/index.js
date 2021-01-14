const knex = require('../../db/index');
exports.getTodo = async (req, res) => {
  const userId = req.id;
  const todos = await knex.select('id', 'text').from('Todo').where({ user_id: userId });
  res.json({ Todo: todos });
};

exports.postTodo = async (req, res) => {
  const userId = req.id;
  const { text } = req.body;
  const data = {
    text,
    user_id: userId
  };
  try {
    await knex('Todo').insert(data);
    res.status(201);
    res.json({ status: 201, message: 'Task criada com sucesso' });
  } catch (err) {
    console.trace(err);
    res.status(500);
    res.json({ status: 500, message: 'Problemas internos, tente novamente ' });
  }
};
