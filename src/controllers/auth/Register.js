const knex = require('../../../db/index');
const bcrypt = require('bcryptjs');
module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ status: 400, message: 'Nenhum campo pode estar vazio' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const data = { name, email, hash };
      await knex('users').insert(data);
      res.status(201);
      res.json({ status: 201, message: 'Usuario criado com sucesso' });
    }
  } catch (err) {
    res.status(500);
    res.json({ status: 500, message: 'Erro interno do servidor, tente novamente mais tarde' });
  }
};
