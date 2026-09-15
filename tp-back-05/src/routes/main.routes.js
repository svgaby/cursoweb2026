import express from "express";
const rutas = express.Router();

rutas.post("/login",(req, res)=>{
    console.log("Formulario Recibido");
    console.log(req.body);
});

export {rutas}