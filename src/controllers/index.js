const knex = require('../../db/index');
exports.getTodos = async (req, res) => {
  const todos = await knex('Todo').select();
  res.json({ todos });
};
