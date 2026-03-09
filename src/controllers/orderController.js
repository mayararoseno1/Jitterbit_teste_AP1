const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {

  try {

    const data = req.body;

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

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao criar pedido"
    });

  }

};