class Repository_Pedido{
    async db(slqcode, values = []){
        const sql = "";
        return sql.query(slqcode, values);
    }
    async buscar_Pedido(){
        const sql = "";
        const pedido = await this.db(sql, values);
        return pedido;
    }
     async criar_Pedido(body){
      const {} = body;
      const sql = "";
      const values = [];
      await this.db();
      const {}=body;
      return pedido_Criado
    }

    async atualizar_Pedido(id){
        const {} = id.params;
        const sql = "";
        const values = [];
        await this.db(sql,values);
        const {} = id.params;
        return Pedido_atualizado

    }
    async eliminar_Pedido(id){
         const {} = id.params;
        const sql = "";
        const values = [];
        await this.db(sql, values);
        const {} = id.params;
        return Pedido_eliminado

    }
   
}

const repository_Pedido = new Repository_Pedido();
export default repository_Pedido;