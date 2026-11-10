import repository_Pedido from "./pedido.repository.js";
class Service_Pedido {
  async buscar_Pedido() {
    const pedido = repository_Pedido.buscar_Pedido;
    return pedido;
  }
  async criar_Pedido() {
    const pedido = repository_Pedido.criar_Pedido;
    return pedido;
  }

  async atualizar_Pedido() {
    const pedido = service_Pedido.atualizar_Pedido;
    return pedido;
  }

  async elominar_Pedido() {
    const pedido = repository_Pedido.eliminar_Pedido;
    return pedido;
  }
}

const service_Pedido = new Service_Pedido();
export default service_Pedido;
