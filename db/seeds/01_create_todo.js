
exports.seed = function (knex) {
  return knex('Todo').del()
    .then(function () {
      const todo = {
        text: 'Go to the supermarket',
        user_id: 1,
        expires_at: new Date(2021, 0, 15, 12, 30)
      };
      return knex('Todo').insert([
        todo
      ]);
    });
};
