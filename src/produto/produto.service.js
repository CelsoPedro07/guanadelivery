import produto_repository from "./produto.repository.js"
class Service_Produto{
    async buscar_Produto(){
        const produto = produto_repository.buscar_Produto();
        return produto
    }
    async criar_Produto(){
        const produto = produto_repository.criar_Produto();
        return produto
    }
    async atualizar_Produto(){
        const produto =produto_repository.atualizar_Produto();
        return produto
    }
    async eliminar_Produto(){
        const produto = produto_repository.eliminar_Produto();
        return produto
    }
}


const service_produto = new Service_Produto();
export default service_produto;