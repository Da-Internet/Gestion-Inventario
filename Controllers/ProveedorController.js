
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarPuntos - Para Registrar una puntuacion
registrarProveedor = (req, res) => {

}

// GET: /Users/:id - Obtener Usuario segun ID
obtenerProveedorPorID = (req, res) => {

}

// GET: /Users/:metodo - Obtener los Usuarios de un Metodo
obtenerProveedorPorPais = (req, res) => {

}

// DELETE: /User/id - Borrar la puntuacion
borrarProveedor = (req, res) => {

}

// UPDATE: /User/id  - Actualizar el Puntaje 
actualizarProveedor = (req, res) => {
    
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarVentas,
    obtenerVentasPorID,
    obtenerVentasPorMetodo,
    borrarVenta,
    actualizarVentas
}