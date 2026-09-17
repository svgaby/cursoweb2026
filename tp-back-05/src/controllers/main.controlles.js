export const loginPost= async (req,res) => {
    try {
console.log("=> loginPost en ejecucion");
console.log(req.body);
// leer datos de BD 
const usuarios =[{
    usuario: "Gaby",
    password: "qwe123"
}];
if(req.body.password.trim()=== usuarios[0].password){
    res.send("login exitoso");
    return;
} else {
    res.send("error al logear");
return;
}

res.send("Formulario recibido");
}  catch (error) {
console.log("Error en loginPost");
console.log(error.mensaje);

res.status(503).send("Ups, ocurrio un error")
}
}