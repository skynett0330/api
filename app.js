const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const pool = require("./database/database");
const router = express.Router();
const clientesController = require("./controllers/clientesController");
const clientesRouter = require("./routers/clientesRouter");


//aqui nao usamos o bodyparser e sim o express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definimos nossa rotas
app.use("/", clientesRouter);
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("logado com sucesso!!!!!");
  }
});

//200 requisicao enviada com sucesso
//403 o cluiente nao possui permissao
//404not found nao encontrou o bjeto procurado
//500 erro interno, falha no servidor

//endpoints = url

//get berbo de consultas e listagens

//exemplo de requisicao em get:{

//  get/clientes    get/clientes/1    get/clientes?id=1 get/clientes ?busca = luiz}

//put é o verbo para editar devemos passar o id

//patch atualiza parcialmente,deve ser passado com id . ex: patch/clientes/1 nome=mito    ---> sainda=---->>> {nme:mito}

//delete: deletar passando o id delete/clientes/1
