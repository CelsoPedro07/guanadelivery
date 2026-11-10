import repository_Produto from "./produto.repository.js";
class Service_Produto{
    async buscar_Produto(){
        const produto = repository_Produto.buscar_Produto();
        return produto
    }
    async criar_Produto(){
        const produto = repository_Produto.criar_Produto();
        return produto
    }
    async atualizar_Produto(){
        const produto =repository_Produto.atualizar_Produto();
        return produto
    }
    async eliminar_Produto(){
        const produto = repository_Produto.eliminar_Produto();
        return produto
    }
}


const service_produto = new Service_Produto();
export default service_produto;