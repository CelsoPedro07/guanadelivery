class Repository_Produto{
    async db(sqlcode, values = []){
        const sql="";
        return sql.query(sqlcode, values);
    }
    async buscar_Produto(){
        const sql = "";
        const produto = await this.db(sql);
        return produto
    }
    async criar_Produto(body){
        const {nome ,preco ,categoria ,descricao ,data_cadastro} = body;
        const sql ="INTO produto (nome,preco ,categoria ,descricao ,data_cadastro) VALUES($1,$2,$3,$4,$5,$6)";
        const values = [nome,preco ,categoria ,descricao ,data_cadastro,id];
        await this.db.this(sql,values)
        const {preco:PrecoPro,...Produto_Criado}=body;
        return Produto_Criado
    }

    async atualizar_Produto(id){
        const {} = id.params;
        const sql = "";
        const values = [];
        await this.db(sql,values);
        const {} = id.params;
        return Produto_Atualizado
        
    }
    async eliminar_Produto(id){
        const {} = id.params;
        const sql = "";
        const values = [];
        await this.db(sql, values)
        const {} = id.params;
        return Produto_eliminado
    }
}

const repository_Produto = new Repository_Produto();
export default repository_Produto;