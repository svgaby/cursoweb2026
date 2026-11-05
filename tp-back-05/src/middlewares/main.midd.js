export const validarLogin = async (req, res, next) => {
    console.log("---> Middleware de validacion de login en ejecucion")
    let validacion = true;
    // validamos
    const usuario = req.body.usuario.trim();
    const password = req.body.password.trim();
    if (usuario == "" || password == "") {
        validacion = false;
    }
    // si sale mal
    if (validacion === false) {
        console.log("--> VALIDACION ERRONEA EN LOGIN");
        res.status(400).send("error al validad LOGIN");
        return;
    }

    // si esta OK
    console.log("--> Validacion de login exitosa");
    next();

}

export const verificarLogin = (req, res, next) => {
    if (!req.session?.user) {
        res.redirect("/login.html");
        return;
    }
    next();
}

export const validarPedido = (req, res, next) => {
    // Validar body
    console.log("---> Middleware de validacion de login en ejecucion");
    console.log(req.body);  // -como anda , ya lo comento
    try {    //buscame el negativo  -- por logica se pone el positivo
        if (req.body.nombre === "" ||
            req.body.contacto === "" ||
            typeof (req.body.nombre) !== "string" ||
            typeof (req.body.contacto) !== "string") {
            res.status(400).json({
                ok: false,
                mensaje: "Faltan Datos en el envio----"
            });
            return;
        }
        let validacionProductros = true;
        // validacion de productos del carrito
        if (typeof (req.body.productos) !== "object") {
            validacionProductros = false;
        }

        if (req.body.productos.length === 0) {
            validacionProductros = false;
        }

        req.body.productos.forEach((prod) => {
            if (!prod.id || !prod.cantidad || !prod.precio || !prod.descripcion) {
                validacionProductros = false;
            }
            if (typeof (prod.id) !== "number" ||
                typeof (prod.cantidad) !== "number" ||
                typeof (prod.precio) !== "number" ||
                typeof (prod.descripcion) !== "string") {
                validacionProductros = false;
            }

        })

        if (validacionProductros === false) {
            res.status(400).json({
                ok: false,
                mensaje: "Faltan Datos en el envio"
            });
            return;
        }

        next();
    } catch (error) {
        console.log("Error Al Validar", error);
        res.status(400).json({
            ok: false,
            mensaje: "Faltan Datos en el envio"
        });


    }
}