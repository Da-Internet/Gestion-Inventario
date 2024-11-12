
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const inventarioController = require('../Controllers/InventarioController.js');

// POST: /registrarProducto - Para Registrar un producto en el inventario
rutas.post('/registrarProducto', inventarioController.registrarProducto)

// GET /obtenerproductos - Para obtener todos los Productos
router.get('/obtenerproductos', inventarioController.obtenerProductos)

// DELETE: /Compras/id - Borrar la Compras
rutas.delete('/id_inventario', comprasController.borrarProducto)

// UPDATE: /Compras/id  - Actualizar la Compras 
rutas.put('/id_inventario', comprasController.actualizarProducto)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;