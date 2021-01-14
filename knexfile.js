// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    pool: {
      afterCreate: function (connection, callback) {
        connection.query('SET time_zone = \'-03:00\';', function (err) {
          callback(err, connection);
        });
      }
    }
  }
};
