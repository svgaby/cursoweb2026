import "dotenv/config";
import express from "express";
import {rutas} from "./src/routes/main.routes.js";
import session from "express-session";


const app = express();

app.use(express.static("public"));  //palabra igual que la carpeta
app.use(express.urlencoded({
    extended: false,
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use("/", rutas) 

app.use((req,res)=>{
    res.send("error 404 --- Pagina Inexistente ---")
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en http//:localhost:${process.env.PORT}`)
});
