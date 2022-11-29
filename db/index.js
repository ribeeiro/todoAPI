const { development } = require('../knexfile');
// eslint-disable-next-line
const knex = require('knex')(development);

module.exports = knex;
