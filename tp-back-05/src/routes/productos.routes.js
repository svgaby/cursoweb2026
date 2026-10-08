import exp from "express";
export const rutasProductos = exp.Router();
import * as middlewaresMain from "../middlewares/main.midd.js";
import * as controllersProductos from "../controllers/productos.controllers.js"

rutasProductos.get("/productos/crear", middlewaresMain.verificarLogin, controllersProductos.crearProducto);
rutasProductos.post("/productos/crear",middlewaresMain.verificarLogin, controllersProductos.crearProductoPost);

rutasProductos.get("/productos/editar/:id", middlewaresMain.verificarLogin, controllersProductos.editarProducto);
rutasProductos.post("/productos/editar/:id", middlewaresMain.verificarLogin, controllersProductos.editarProductoPost);