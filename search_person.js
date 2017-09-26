const settings = require("./settings")
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: settings.host,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
  }
});

console.log("test")