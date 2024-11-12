
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

// Con esto conectamos las rutas al controlador especifico
const ventasController = require('../Controllers/VentasController.js');

// POST: / registrarVentas - Para Registrar una puntuacion
rutas.post('/registrarVentas', ventasController.registrarVentas)

// GET: /Ventas/:id - Obtener las Ventas segun ID
rutas.get('/:id_venta', ventasController.obtenerVentasPorID)

// GET: /Ventas/:metodo_pago - Obtener las Ventas segun Metodo de pago
rutas.get('/:metodo_pago', ventasController.obtenerVentasPorMetodo)

// DELETE: /Ventas/id - Borrar la venta
rutas.delete('/id_venta', ventasController.borrarVenta)

// UPDATE: /Ventas/id  - Actualizar la venta 
rutas.put('/id_venta', ventasController.actualizarVentas)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;