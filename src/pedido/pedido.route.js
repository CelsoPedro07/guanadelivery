import controller_Pedido from "./pedido.controller.js";
import Router from "express";
const router_Pedido = Router();

router_Pedido.get("/pedido",controller_Pedido.buscar_Pedido);
router_Pedido.post("/pedido",controller_Pedido.criar_Pedido);
router_Pedido.put("/pedido/:id",controller_Pedido.atualizar_Pedido);
router_Pedido.delete("/pedido/:id",controller_Pedido.eliminar_pedido);

export default router_Pedido;
