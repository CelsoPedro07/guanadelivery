import service_usuario from "./usuario.service.js";

class ControllerUsuario {
  async buscar_Usuario(req, res) {
    const usuario = await service_usuario.buscar_Usuario(req, res);
    return res.send(usuario);
  }
  async criar_Usuario(req, res) {
    const usuario = await service_usuario.criar_Usuario(req.body);
    return res.send(usuario);
  }
  async atualizar_Usuario(req, res,id) {
    const usuario = await service_usuario.atualizar_Usuario(req.body);
    return res.send(usuario);
  }
  async deletar_Usuario(req, res) {
    const usuario = await service_usuario.deletar_Usuario(req.body);
    return res.send(usuario);
  }
}

const controllerUsuario = new ControllerUsuario();
export default controllerUsuario;
