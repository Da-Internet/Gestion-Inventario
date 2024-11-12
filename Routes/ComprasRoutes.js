
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const comprasController = require('../Controllers/comprasController.js');

// POST: / registrarVentas - Para Registrar una puntuacion
rutas.post('/registrarCompras', comprasController.registrarCompras)

// GET: /Ventas/:id - Obtener las Ventas segun ID
rutas.get('/:id_compras', comprasController.obtenerComprasPorID)

// GET: /Ventas/:metodo_pago - Obtener las Ventas segun Metodo de pago
rutas.get('/:metodo_compra', comprasController.obtenerComprasPorMetodo)

// DELETE: /Ventas/id - Borrar la venta
rutas.delete('/id_compras', comprasController.borrarCompra)

// UPDATE: /Ventas/id  - Actualizar la venta 
rutas.put('/id_compras', comprasController.actualizarCompra)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;