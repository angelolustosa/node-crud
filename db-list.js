import { randomUUID } from "crypto";

export class DataBaseTemp {
  produtos = [];

  adicionar = (produto) => {
    console.log('produto_antes', produto)

    //add propriedade id com id aleatorio
    produto.id = randomUUID()

    console.log('produto_depois', produto)
    return this.produtos.push(produto);
  };

  listarTodos = () => this.produtos;

  listarPorId = (idParam) =>  this.produtos.find(produto => produto.id === idParam )

  atualizar = () => {};

  excluir = () => {};
}
