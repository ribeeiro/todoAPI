exports.up = (knex) =>
  knex.schema.createTable('Todo', (table) => {
    table.increments().primary();
    table.string('text').notNullable();

    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .unsigned();
    table.datetime('expires_at').notNullable();
    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTable('Todo');
