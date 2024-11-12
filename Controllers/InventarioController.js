
// Esto es para manejar las peticiones de la ruta

// Conectamos a la base de datos para usarla en los controladores
const conexion = require("../Models/Database.js")

// POST: / registrarPuntos - Para Registrar una puntuacion
registrarInventario = (req, res) => {

}

// GET: /Users/:id - Obtener Usuario segun ID
obtenerInventarioPorID = (req, res) => {

}

// GET: /Users/:metodo - Obtener los Usuarios de un Metodo
obtenerInventarioPorStock = (req, res) => {

}

// DELETE: /User/id - Borrar la puntuacion
borrarInventario = (req, res) => {

}

// UPDATE: /User/id  - Actualizar el Puntaje 
actualizarInventario = (req, res) => {
    
}

// Con esto llamamos todos los modulos en conjunto
module.exports = {
    registrarInventario,
    obtenerInventarioPorID,
    obtenerInventarioPorStock,
    borrarInventario,
    actualizarInventario
}