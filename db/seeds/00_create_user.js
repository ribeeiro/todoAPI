const crypto = require('crypto');
const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(async () => {
      const pass = crypto.randomBytes(10).toString('hex');
      const user = {
        name: 'Ribeir0o',
        email: 'mail@mail.com',
        hash: await bcrypt.hash(pass, 10)
      };
      return knex('users').insert([user]);
    });
};
