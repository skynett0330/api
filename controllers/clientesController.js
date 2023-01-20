const pool = require("../database/database");

const clientesController = {
  selectClientes: async function () {
    const clientes = await pool.query("select * from tab_clientes");
    return clientes.rows;
  },

  selectIdClientes: async function (id) {
    const sql = await pool.query(
      "select * from tab_clientes where id_cliente = $1",
      [id]
    );
    return sql.rows;
  },

  //inserir clientes

  insertClientes: async function (cliente) {
    let inserirCliente = pool.query(
      "insert into tab_clientes(nome,idade)values($1,$2)",
      [cliente.nome, cliente.idade]
    );

    return inserirCliente;
  },
  updateClientes: async function (id, cliente) {
    const updateCliente = await pool.query(
      "update tab_clientes set nome=$1,idade =$2 where id_cliente =$3",
      [cliente.nome, cliente.idade, id]
    );
    return updateCliente;
  },

  deleteCliente: async function (id) {
    let deleteCliente = await pool.query(
      "delete from tab_clientes where id_cliente = $1",
      [id]
    );
    return deleteCliente;
  },
};

module.exports = clientesController;
