import * as serviciosProductos from "../services/productos.services.js"

export const getProductos = async (req, res) => {
    console.log("--> getProductos en ejecucion");
    try {
        /// leer productos de BD
        const productos = await serviciosProductos.getProductos();
        // crear vista de cliente

        //enviar vista en la respuesta
        return res.send(productos[0]);

    } catch (error) {
        console.log("Error en getProductos");
        console.log(error.message);
        res.status(503).send("Ups, ocurrio un error")
    }

}