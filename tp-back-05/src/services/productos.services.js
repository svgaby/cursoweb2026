import * as configDatabase from "../config/database.js"

export const getProductos = async () => {
    try {
        const productos = await configDatabase.query(`SELECT * FROM productos WHERE eliminado = 0`);
        return productos;
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("ERROR EN QUERY EN LA BASE DE DATOS");
    }
}

export const getProductosTodos = async () => {
    try {
        const productos = await configDatabase.query(`SELECT * FROM productos`);
        return productos;
    } catch (error) {
        console.error("Error en la query" + error.message);
        throw new Error("ERROR EN QUERY EN LA BASE DE DATOS");
    }
}

export const crearProducto = async (descripcion, precio) => {
    console.log("--> servicio crearProductos en ejecucion");
    try {
        // grabar en BD
        const respuesta = await configDatabase.query(`INSERT INTO productos (DESCRIPCION,PRECIO) VALUES ("${descripcion}", "${precio}")`)
        // devolver respuesta de BD
    } catch (error) {
        console.log("Error en servicio crearProducto", error.message);
        throw new Error("Error en servicio crearProducto")
    }
}

export const getProductoId = async (id) => {
    console.log("servicio editarProductos ID en ejecucion");
    try {
        // editar en BD
        const producto = await configDatabase.query(`SELECT * FROM productos WHERE id=${id}`);
        console.log(producto[0][0]);
        return producto[0][0];
    } catch (error) {

    }
};

export const updateProducto = async (id, body) => {
    console.log("servicio update producto ejecucion");
    try {
        const respuesta = await configDatabase.query(`UPDATE productos SET descripcion = "${body.descripcion}", precio= "${body.precio}", eliminado= "${body.eliminado}" WHERE id= ${id} `)
return respuesta;

    } catch (error) {
        console.error("Error en la servicio updateProducto" + error.message);
        throw new Error("ERROR EN QUERY servicio updateProducto");
    }
};

export const deleteProducto = async (id) => {
    console.log("servicio delete producto en ejecucion");
    try {
        const respuesta = await configDatabase.query(`UPDATE productos SET eliminado = 1 WHERE id= ${id} `)
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log("Error en la servicio elinimarProducto" + error.message);
        throw new Error("ERROR EN QUERY servicio updateProducto");

    }
}


