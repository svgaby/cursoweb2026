import "dotenv/config";
import express from "express";
import {rutas} from "./src/routes/main.routes.js";

const app = express();

app.use(express.static("public"));  //palabra igual que la carpeta
app.use(express.urlencoded({
    extended: false,
}));

app.use("/", rutas) 

app.use((req,res)=>{
    res.send("error 404 --- Pagina Inexistente ---")
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en http//:localhost:${process.env.PORT}`)
});
