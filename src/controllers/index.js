const knex = require('../../db/index');
exports.getTodo = async (req, res) => {
  const userId = req.id;
  const todos = await knex.select('id', 'text').from('Todo').where({ user_id: userId });
  res.json({ Todo: todos });
};

exports.postTodo = async (req, res) => {
  const userId = req.id;
  const { text } = req.body;
  if (!text) return res.status(400).json({ status: 400, message: 'Sintaxe incorreta' });
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

exports.putTodo = async (req, res, next) => {
  const userId = req.id;
  const taskId = req.params.id;
  const { text } = req.body;

  if (!text) return res.status(400).json({ status: 400, message: 'Sintaxe incorreta' });
  if (isNaN(taskId)) return res.status(400).json({ status: 400, message: 'O id tem que ser um numero' });

  const task = await knex('Todo').select('*').where({ id: taskId, user_id: userId }).first();
  if (!task) return res.status(404).json({ status: 404, message: 'Task nao encontrada' });

  try {
    await knex('Todo').where(task).update({ text });
    res.status(200).json({ status: 200, message: 'Task alterada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: 'Erro interno, tente novamente.' });
  }
};

exports.deleteTodo = async (req, res, next) => {
  const userId = req.id;
  const taskId = req.params.id;

  if (isNaN(taskId)) return res.status(400).json({ status: 400, message: 'O id tem que ser um numero' });

  const task = await knex('Todo').select().where({ id: taskId, user_id: userId }).first();

  if (!task) return res.status(404).json({ status: 404, message: 'Task nao encontrada' });

  try {
    await knex('Todo').where(task).del();
    res.status(200).json({ status: 200, message: 'task deletada com sucesso' });
  } catch (err) {
    console.trace(err);
    res.status(500).json({ status: 500, message: 'erro interno, tente novamente' });
  }
};
