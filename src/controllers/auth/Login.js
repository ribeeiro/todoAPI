const knex = require('../../../db/index');
const { isEmail } = require('validator').default;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.status(400).json({ status: 400, message: 'Sintaxe invalida' });
    if (!isEmail(email)) return res.status(400).json({ status: 400, message: 'Digite um email valido' });

    const data = await knex('users').select().first().where({ email });
    if (!data) return res.status(404).json({ status: 404, message: 'Email nao encontrado na nossa base de dados' });

    const { id, hash } = data;
    const isCorrect = await bcrypt.compare(password, hash);
    if (isCorrect) {
      const payload = {
        id,
        email
      };
      const signOptions = {
        expiresIn: '12h',
        algorithm: 'RS256'
      };
      const token = await jwt.sign(payload, process.env.JWT_PRIVATE_KEY, signOptions);
      res.status(200);
      res.json({ token });
    } else {
      res.status(401);
      res.json({ status: 401, message: 'Senha incorreta' });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ status: 500, message: 'Erro interno, tente novamente mais tarde' });
  }
};
