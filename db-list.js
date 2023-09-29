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

  atualizar = (idParam, produto) => {
    const produtoBD = this.listarPorId(idParam)
    console.log('produtoBD', produtoBD);

    if(produtoBD) {
      produtoBD.nome = produto.nome
      produtoBD.modelo = produto.modelo
      produtoBD.preco = produto.preco
    }

    return produtoBD
  };

  excluir = (idParam) => {
    let indexProduto = this.produtos.findIndex(produto => produto.id === idParam )
     return this.produtos.splice(indexProduto, 1)
  };
}
