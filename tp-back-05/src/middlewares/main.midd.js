export const validarLogin = async ( req, res, next) => {
    console.log("---> Middleware de validacion de login en ejecucion")
let validacion = true;
    // validamos
const usuario = req.body.usuario.trim();
const password = req.body.password.trim();
if(usuario == ""|| password == ""){
    validacion = false;
}
    // si sale mal
if(validacion === false){
    console.log("--> VALIDACION ERRONEA EN LOGIN");
    res.status(400).send ("error al validad LOGIN");
    return;
}

    // si esta OK
console.log("--> Validacion de login exitosa");
next();

}