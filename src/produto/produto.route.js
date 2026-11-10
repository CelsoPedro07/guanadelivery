import Router  from "express";
import controller_Produto from "./produto.controller.js";
const router_produto = Router();


router_produto.get("/produto",controller_Produto.buscar_Produto);
router_produto.post("/produto",controller_Produto.criar_Produto);
router_produto.put("/produto",controller_Produto.atualizar_Produto);
router_produto.delete("/produto",controller_Produto.eliminar_Produto);

export default router_produto;