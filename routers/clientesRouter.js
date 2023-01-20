const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const api = require("../api");


router.get("/pokemon/:id", async function (req, res) {
  try {

    let id = req.params.id

    const { data } = await api.get(`pokemon/${id}`);
    res.status(200).json({ name: data.name });
  } catch (e) {
    res.status(500).json("{ error: error.message }");
  }
});

router.get("/", function (req, res, next) {
  res.status(200).send({ message: "ok,deu certo" });
});

router.get("/clientes", async function (req, res, next) {
  try {
    const results = await clientesController.selectClientes();
    res.json(results);
  } catch (error) {
    res.status(500).json("erro na requisicao");
  }
});

router.get("/clientes/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let clienteId = await clientesController.selectIdClientes(id);

    if (clienteId.length > 0) {
      res.json(clienteId);
    } else {
      res.status(500).json(`nao econtrado o cliente: ${id}`);
    }
  } catch (e) {
    res.status(500).json("erro na consulta");
  }
});

router.post("/clientes", async function (req, res, next) {
  let { nome, idade } = req.body;

  try {
    let inserir = await clientesController.insertClientes(req.body);

    res.json(inserir);
  } catch (e) {
    res.status(500).json(error);
  }
});

router.put("/clientes/:id", async function (req, res, next) {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = !req.body.idade ? null : parseInt(req.body.idade);

  try {
    let updateCliente = await clientesController.updateClientes(id, req.body);

    res.json({ message: "cliente atualizado com sucesso!!!" });
  } catch (e) {
    res.status(500).json(error);
  }
});

router.delete("/clientes/:id", async function (req, res, next) {
  const id = req.params.id;
  try {
    let deleteCliente = await clientesController.deleteCliente(id);
    res.json({ message: "deletado com sucesso" + id });
  } catch (e) {
    res.status(500).json(error);
  }
});

module.exports = router;
