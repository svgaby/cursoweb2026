const express = require ("express");
const app = express();
const PORT = 4000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

/* app.get("/", (req, res )=>{  // ojo req y res   usar lo mismo x ,y 
    res.send("<h1>Mi sitio con express</h1>" )
})
 */
app.post("/formularios", (req, res)=>{
    console.log("Post recibido en /formulario");
    console.log(req.body);

let datos = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono
}

datos = JSON.stringify(datos)

datos +=","   //  /n salto de linea o save uno cual
fs.appendFile("./datos/datos.json", datos, (error)=>{
    console.log(error);
    return
})

    res.send("<h2> DATOS CARGADOS A LA BASE DE DATOS </h2><a href='/'>VOLVER</a>")
})

app.listen(PORT, ()=>{
    console.log(`Servidor activo en http://localhost:${PORT}`)
});