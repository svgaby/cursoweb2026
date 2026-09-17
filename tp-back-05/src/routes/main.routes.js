import express from "express";
export const rutas = express.Router();  // metodo nuevo
import * as controllersMain from "../controllers/main.controlles.js"

//const rutas = express.Router();  //metodo viejo  linia 4 + 11 

/* rutas.post("/login", (req, res) => {
    console.log("Formulario Recibido");
    console.log(req.body);
});

//export {rutas}  // va con linea 4

rutas.post */

import * as middlewaresMain from "../middlewares/main.midd.js"

rutas.post("/login",middlewaresMain.validarLogin ,controllersMain.loginPost );
