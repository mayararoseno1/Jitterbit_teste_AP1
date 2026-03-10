const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orderRoutes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/orders";

mongoose.connect(MONGODB_URI)
.then(() => console.log("✅ Conectado ao MongoDB com sucesso!"))
.catch(err => {
  console.error("❌ Erro ao conectar ao MongoDB:", err.message);
  process.exit(1);
});

mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose conectado ao DB');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 Erro na conexão do Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚪ Mongoose desconectado');
});

app.use("/order", orderRoutes);

app.get("/", (req, res) => {
  res.json({ 
    message: "API de Pedidos - Jitterbit Teste",
    status: "online",
    endpoints: {
      "POST /order": "Criar novo pedido",
      "GET /order/:orderId": "Buscar pedido por número",
      "GET /order/list": "Listar todos pedidos",
      "PUT /order/:orderId": "Atualizar pedido",
      "DELETE /order/:orderId": "Deletar pedido"
    }
  });
});


app.use((req, res) => {
  res.status(404).json({ 
    message: "Rota não encontrada",
    method: req.method,
    path: req.originalUrl,
    hint: "Verifique a documentação em GET /"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});