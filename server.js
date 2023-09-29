import { fastify } from "fastify";
import { DataBaseTemp } from "./db-list.js";

const port = 5000;
const host = "localhost"; //127.0.0.1

const server = fastify();

const db = new DataBaseTemp();

server.get("/", async (req, res) => {
  res.send("Servidor no ar!");
});

server.get("/produtos", (req, res) => {
  let produtos = db.listarTodos();
  return res.status(200).send({
    size: produtos.length,
    data: produtos,
  });
});

server.get("/produto/:id", (req, res) => {
  let idParam = req.params.id;

  let produto = db.listarPorId(idParam);
  return res.status(200).send(produto);
});

server.post("/produto", (req, res) => {
  let produto = {
    nome: "Nike",
    modelo: "Air Force",
    preco: 1400,
  };
  db.adicionar(produto);
  res.status(201).send(produto);
});

server.put("/produto/:id", async (req, res) => {
  const { id } = req.params;
  console.log('Objeto com os valores atualizados:', req.body);
  const produtoComAtualizacao = req.body

  let produtoAtualizado = db.atualizar(id, produtoComAtualizacao);

  console.log('produtoAtualizado', produtoAtualizado);

  return res.status(200).send(produtoAtualizado)
});

server.delete('/produto/:id', (req, res) => {
  const { id } = req.params;

  const produto = db.excluir(id)

  return res.status(200).send(produto)
}) 

server
  .listen({
    port,
    host,
  })
  .then(() => console.log(`Servidor rodando em http://${host}:${port}`))
  .catch((err) => console.log(`Erro ao subir o servidor: ${err}`));
