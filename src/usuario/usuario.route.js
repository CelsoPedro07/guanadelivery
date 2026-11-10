import constrollerUsuario from "./usuario.controller.js";
import { Router } from "express";
const router_usuario = Router();

router_usuario.get("/usuario", constrollerUsuario.buscar_Usuario);
router_usuario.post("/usuario", constrollerUsuario.criar_Usuario);
router_usuario.put("/usuario/:id", constrollerUsuario.atualizar_Usuario);
router_usuario.delete("/usuario", constrollerUsuario.deletar_Usuario);


export default router_usuario;
