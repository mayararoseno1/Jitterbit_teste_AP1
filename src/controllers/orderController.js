const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  try {
    const data = req.body;

    
    if (!data.numeroPedido || !data.valorTotal || !data.dataCriacao || !data.items) {
      return res.status(400).json({
        message: "Campos obrigatórios: numeroPedido, valorTotal, dataCriacao, items"
      });
    }

    
    const mappedOrder = {
      orderId: data.numeroPedido,
      value: data.valorTotal,
      creationDate: data.dataCriacao,
      items: data.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const order = new Order(mappedOrder);
    await order.save();

    res.status(201).json({
      message: "Pedido criado com sucesso",
      order: order
    });

  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({
      message: "Erro interno ao criar pedido",
      error: error.message
    });
  }
};


exports.getOrderByNumber = async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const order = await Order.findOne({ orderId: orderId });
    
    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    res.status(200).json(order);

  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    res.status(500).json({
      message: "Erro interno ao buscar pedido",
      error: error.message
    });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    
    res.status(200).json({
      count: orders.length,
      orders: orders
    });

  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    res.status(500).json({
      message: "Erro interno ao listar pedidos",
      error: error.message
    });
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const data = req.body;

    
    const existingOrder = await Order.findOne({ orderId: orderId });
    
    if (!existingOrder) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    
    const mappedUpdate = {
      orderId: data.numeroPedido || existingOrder.orderId,
      value: data.valorTotal || existingOrder.value,
      creationDate: data.dataCriacao || existingOrder.creationDate,
      items: data.items ? data.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      })) : existingOrder.items
    };

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: orderId },
      mappedUpdate,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Pedido atualizado com sucesso",
      order: updatedOrder
    });

  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    res.status(500).json({
      message: "Erro interno ao atualizar pedido",
      error: error.message
    });
  }
};


exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const deletedOrder = await Order.findOneAndDelete({ orderId: orderId });
    
    if (!deletedOrder) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    res.status(200).json({
      message: "Pedido deletado com sucesso",
      order: deletedOrder
    });

  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    res.status(500).json({
      message: "Erro interno ao deletar pedido",
      error: error.message
    });
  }
};