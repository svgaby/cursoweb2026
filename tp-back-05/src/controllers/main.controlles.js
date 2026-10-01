import * as configDatabase from "../config/database.js";
import * as vistasMain from "../views/main.views.js";

export const loginPost = async (req, res) => {
    try {
        console.log("=> loginPost en ejecucion");
        console.log(req.body);
        // leer datos de BD 
        const usuarios = await configDatabase.query(`SELECT * FROM usuarios WHERE usuario = "${req.body.usuario}" AND eliminado = 0`);
        if (req.body.password.trim() === usuarios[0][0].CONTRASENIA) {
            req.session.user = {
                id: usuarios[0][0].ID,
                usuario: usuarios[0][0].USUARIO,
            }
            console.log("Usurio Logueado", req.session.user);
            res.redirect("/panel");
            return;
        } else {
            res.send("error al logear");
            return;
        }

        res.send("Formulario recibido");
    } catch (error) {
        console.log("Error en loginPost");
        console.log(error.message);

        res.status(503).send("Ups, ocurrio un error")
    }
}

export const getDashboard = (req,res)=>{
    try {
        console.log("--> getDashborad en ejecucion");
    // Crear vista del panel
    const vista = vistasMain.mainDashboard(req.session.user);
    return res.send(vista);
    } catch (error) {
        console.log("error en getDashborad", error.message);
        res.status(503).send("Ups ocurrio un error");
        return;
    }
}