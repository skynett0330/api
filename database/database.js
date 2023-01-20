const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "123",
  database: "db_webapi",
  host: "localhost",
  port: 5432,
});

pool.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("conectado com sucesso ao banco de_webapi");
  }
});

module.exports = pool;
