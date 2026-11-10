import service_produto from "./produto.service.js";

class Controller_Produto {
  async buscar_Produto(req, res) {
    const produto = await service_produto.buscar_Produto();
    return res.send(produto);
  }
  async criar_Produto(req, res,body) {
    const produto = await service_produto.criar_Produto(body);
    return res.send(produto);
  }
  async atualizar_Produto(req, res, id) {
    const produto = await service_produto.atualizar_Produto(req.body, id);
    return res.send(produto);
  }
  async eliminar_Produto(req, res) {
    const produto = await service_produto.eliminar_Produto();
    return res.send(produto);
  }
}

const controller_Produto = new Controller_Produto();
export default controller_Produto;
