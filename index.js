import express from "express";
const app = express();

import dotenv from "dotenv";
import router_usuario from "./src/usuario/usuario.route.js";
import router_produto from "./src/produto/produto.route.js";
import router_Pedido from "./src/pedido/pedido.route.js";

dotenv.config();

app.use(express.json());
app.use(router_usuario)
app.use(router_produto)
app.use(router_Pedido)


app.get("/", (req, res) => {
  res.send("Hello, Worldo");
});

app.listen(process.env.PORTA, () => {
  console.log(" Rodando o Servidor  " + process.env.PORTA);
});