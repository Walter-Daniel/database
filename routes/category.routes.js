const express = require('express');
const api = express.Router();
const orderController = require('../controllers/order.controller')

api.get('/categories/:name', orderController.getOrders)
api.post('/orders', orderController.createOrder)

module.exports = api