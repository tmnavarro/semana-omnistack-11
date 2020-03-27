const knex = require('knex');
const config = require('../../knexfile');

const configConnection =
  process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(configConnection);

module.exports = connection;
