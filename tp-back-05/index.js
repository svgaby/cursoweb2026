import "dotenv/config";
import express from "express";
import {rutas} from "./src/routes/main.routes.js";
import {rutasProductos} from "./src/routes/productos.routes.js";
import session from "express-session";
import {rateLimit} from "express-rate-limit";


const app = express();
const limitador = rateLimit({
windowMs: 10*60*1000,  // valor seria 1hs para que cierre seccion
limit: 300,
standardHeaders: true,
legacyHeaders: false,
message:"Demaciodos intentos, vuelva mas tarde.",
});
app.use(limitador) // la palabra que hicimos la const
app.use(express.static("public"));  //palabra igual que la carpeta
app.use(express.urlencoded({
    extended: false,
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {maxAge:15*24*60*60*1000}  // dura la sesion 15 dias // 2 medida de serguridad
}))

app.use("/", rutas); 
app.use("/", rutasProductos);

app.use((req,res)=>{
    res.send("error 404 --- Pagina Inexistente ---");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en http//:localhost:${process.env.PORT}`)
});
