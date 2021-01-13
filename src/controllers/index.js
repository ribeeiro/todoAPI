const knex = require('../../db/index');
exports.getTodos = async (req, res) => {
  const userId = req.id;
  const todos = await knex('Todo').select('id', 'text').where({ id: userId });
  res.json({ Todo: todos });
};
