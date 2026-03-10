# 📦 API de Gerenciamento de Pedidos - Jitterbit Teste

![Node.js](https://img.shields.io/badge/Node.js-24.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-9.x-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 📋 Sobre o Projeto

API RESTful desenvolvida para o desafio técnico da Jitterbit, que permite o gerenciamento completo de pedidos com transformação automática de dados.

### ✨ Funcionalidades

- ✅ Criar novo pedido com transformação de campos
- ✅ Buscar pedido por número do pedido
- ✅ Listar todos os pedidos
- ✅ Atualizar pedido existente
- ✅ Deletar pedido
- ✅ Armazenamento em MongoDB
- ✅ Tratamento de erros robusto
- ✅ Código organizado no padrão MVC

## 🚀 Tecnologias Utilizadas

- **Node.js** (v24.x) - Ambiente de execução
- **Express** (v5.x) - Framework web
- **MongoDB** (v9.x) - Banco de dados NoSQL
- **Mongoose** (v9.x) - ODM para MongoDB
- **Nodemon** - Hot reload em desenvolvimento
- **Dotenv** - Gerenciamento de variáveis de ambiente


## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js instalado (v18 ou superior)
- MongoDB instalado localmente ou MongoDB Atlas
- Git (opcional, para clonar)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/mayararoseno1/Jitterbit_teste_AP1.git
cd Jitterbit_teste_AP1
```

2. **Clone o repositório**
```bash 
npm install
```

3. **Configure o MongoDB**

Opção 1: Local - Tenha o MongoDB rodando em **mongodb://localhost:27017**

Opção 2: Docker - **docker run -d -p 27017:27017 --name mongodb mongo:latest**

Opção 3: Atlas - Configure a string de conexão no arquivo .env

4. **Crie o arquivo .env (opcional)**

```bash 
MONGODB_URI=mongodb://localhost:27017/orders
PORT=3000
```
5. **Inicie o servidor**

**Modo desenvolvimento (com nodemon)**

npm run dev

**Modo produção**

npm start

# 📌 Endpoints da API

1. **Criar Pedido**
```bash 
POST http://localhost:3000/order
```
2. **Buscar Pedido por Número**
```bash 
GET http://localhost:3000/order/v10089015vdb-01
```
3. **Listar Todos os Pedidos**
```bash 
GET http://localhost:3000/order/list
```
4. **Atualizar Pedido**
```bash 
PUT http://localhost:3000/order/v10089015vdb-01
```
5. **Deletar Pedido**
```bash 
DELETE http://localhost:3000/order/v10089015vdb-01
```
## 🧪 Testando a API

### Com curl (PowerShell)

```powershell
# Criar pedido
curl.exe -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{\"numeroPedido\":\"teste123\",\"valorTotal\":1000,\"dataCriacao\":\"2023-01-01T00:00:00Z\",\"items\":[{\"idItem\":\"1\",\"quantidadeItem\":1,\"valorItem\":100}]}'

# Listar todos os pedidos
curl.exe http://localhost:3000/order/list

# Buscar pedido por número
curl.exe http://localhost:3000/order/teste123

# Atualizar pedido
curl.exe -X PUT http://localhost:3000/order/teste123 -H "Content-Type: application/json" -d '{\"valorTotal\":2000}'

# Deletar pedido
curl.exe -X DELETE http://localhost:3000/order/teste123
```
### Com Postman

1. Crie uma nova requisição

2. Configure o método (POST, GET, PUT, DELETE)

3. URL: http://localhost:3000/order ou http://localhost:3000/order/teste123

4. Headers: Content-Type: application/json

5. Body: raw > JSON

6. Clique em Send

## 📊 Visualizando os Dados

Use o **MongoDB Compass**:

1. Conecte em localhost:27017

2. Acesse o banco orders

3. Visualize a coleção orders


## ✨ Autora
Mayara Roseno