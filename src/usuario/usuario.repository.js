class RepositoryUsuario {
  async db(sqlcode, vqlues = []) {
    const sql = "";
    return sql.query(sqlcode, vqlues);
  }

  async buscar_Usuario() {
    const sql = "SELECT nome_usuario, email,data_cadastro, data_nascimento  FROM usuario";
    const usuario = await this.db(sql);
    return usuario;
  }
  async criar_Usuario(body) {
    const { nome_usuario, email, senha, data_cadastro, data_nascimento } = body;
    const sql =
      "INSERT usuario INTO(nome_usuario, email, senha ,data_cadastro,data_nascimento) VALUES($1,$2,$3,$4,$5,$6)";
    const values = [
      nome_usuario,
      email,
      senha,
      data_cadastro,
      data_nascimento,
      id, 
    ];
    await this.db(sql, values);
    const { senha: senhaUs, ...Usuario_Criado } = body;
    return Usuario_Criado;
  }
  async atualizar_Usuario(id){
    const { nome_usuario, email, senha, data_cadastro, data_nascimento }=id.params;
    const sql = "UPDATE usuario SET WHERE id=$1 AND id=$2";
    const values =[id];
    await this.db(sql,values);
    const { senha:SenhaU, ...usuario_Atualizado}=id.params;
    return usuario_Atualizado

  }

  async eliminar_Usuario(id){
    const sql = "DELETE usuario WHERE id=$1 AND id=$2";
    const values =[id];
    await this.db(sql,values);
    const {nome_usuario, email, senha, data_cadastro, data_nascimento, ...eliminado_Usuario}=id.params;
    return eliminado_Usuario
  }
}

const repositoryUsuario = new RepositoryUsuario();
export default repositoryUsuario;
