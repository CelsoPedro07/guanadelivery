-- Tabela de Usuários
CREATE TABLE usuario (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_usuario    VARCHAR(100)  NOT NULL,
    email           VARCHAR(255)  NOT NULL UNIQUE,
    senha           VARCHAR(255)  NOT NULL,  -- guarde o HASH da senha, nunca o texto puro
    endereco        VARCHAR(255),
    previlegio       VARCHAR(10) DEFAULT "normal",
    photo_url       TEXT,
    data_cadastro   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_nascimento DATE
);

-- Tabela de Usuários
CREATE TABLE produto (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome           VARCHAR(255)  NOT NULL UNIQUE,
    preco          DECIMAL(10, 2) NOT NULL,
    categoria       VARCHAR(100)  NOT NULL,
    descricao       TEXT,
    data_cadastro  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
);


-- Tabela de Usuários
CREATE TABLE pedido (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_usuario      UUID NOT NULL,
    id_produto      UUID NOT NULL,
    quantidade       INTEGER NOT NULL,
    estado          VARCHAR(50) NOT NULL DEFAULT 'pendente',
    data_cadastro   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);


-- Tabela de Usuários
CREATE TABLE movimentoStock (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_produto      UUID NOT NULL,
    quantidade       INTEGER NOT NULL,
    data_cadastro   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_produto) REFERENCES produto(id)
);