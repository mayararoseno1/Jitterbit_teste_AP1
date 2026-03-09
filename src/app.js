const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));


app.use("/order", orderRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de Pedidos - Jitterbit Teste" });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});