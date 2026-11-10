import usaurio_repository from "./usuario.repository.js"
class Service_usuario {
  async buscar_Usuario() {
    const usuario = await RepositoryUsuario.buscar_Usuario();
    return usuario;
  }
  async criar_Usuario() {
    const usaurio = await RepositoryUsuario.criar_Usuario();
    return {
      Usuario: usaurio ? usaurio : [],
      Mensagem: "Usuario não Criado",
    };
  }
  async atualizar_Usuario(id) {
    const usuario = await RepositoryUsuario.atualizar_Usuario(id);
    return usuario;
  }
  async eliminar_Usuario() {
    const usuario = await RepositoryUsuario.eliminar_Usuario();
    return usuario;
  }
}

const service_usuario = new Service_usuario();
export default service_usuario;
