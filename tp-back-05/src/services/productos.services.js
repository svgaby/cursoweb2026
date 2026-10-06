import * as configDatabase from "../config/database.js"

export const getProductos =  async ()=>{
    try {
const productos = await configDatabase.query(`SELECT * FROM productos WHERE eliminado = 0`);
return productos;        
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("ERROR EN QUERY EN LA BASE DE DATOS");
    }
}

export const crearProducto = async (descripcion, precio) =>{ 
    console.log("--> servicio crearProductos en ejecucion");
    try {
        // grabar en BD
const respuesta = await configDatabase.query(`INSERT INTO produstos (DESCRIPCION,PRECIO) VALUES ("${descripcion}", "${precio}")`)
        // devolver respuesta de BD
    } catch (error) {
        console.log("Error en servicio crearProducto", error.message);
        throw new Error("Error en servicio crearProducto")
    }
}