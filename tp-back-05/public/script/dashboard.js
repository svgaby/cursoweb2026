console.log("PING dashboar.js")

document
.querySelector("#editarProducto")
.addEventListener("click",  () => {
    const id = window.prompt("ingresar ID del producto a editar");
    //validar ID
    const path =`/productos/editar/${id}`;
    window.location = path;
} )