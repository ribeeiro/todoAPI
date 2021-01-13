
exports.seed = function (knex) {
  return knex('Todo').del()
    .then(function () {
      const todo = {
        text: 'Go to the supermarket',
        user_id: 1
      };
      return knex('Todo').insert([
        todo
      ]);
    });
};
