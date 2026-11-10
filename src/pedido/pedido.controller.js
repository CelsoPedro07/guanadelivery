import service_Pedido from "./pedido.service.js";
class Controller_Pedido{
    async buscar_Pedido(req,res){
        const pedido = service_Pedido.buscar_Pedido;
        return res.send(pedido)
    }
    async criar_Pedido(req,res){
        const pedido = service_Pedido.criar_Pedido;
        return res.send(pedido)
    }
    async atualizar_Pedido(req,res){
        const pedido = service_Pedido.atualizar_Pedido;
        return res.send(pedido)
    }
    async eliminar_pedido(req,res){
        const pedido = service_Pedido.elominar_Pedido;
        return res.send(pedido)
    }
}

const controller_Pedido = new Controller_Pedido();
export default controller_Pedido;