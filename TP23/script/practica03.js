console.log ("ping PRACtica 03");

/* function producto (detalle, precio) {
    const card =`
    |===========================|
    |        PRODUCTO           |
    |===========================|
    | Descripcion : ${detalle} 
    | Precio :$ ${precio}       
    |===========================|
    `;
    console.log (card);
    return "GRACIAS POR UTILIZAR NUESTRA WEB"
}
*/
 function producto () {
    const detalle = window.prompt("ingresar descipcion");
    const precio = window.prompt("Ingrese Precio");
    const card =`
    |===========================|
    |        PRODUCTO           |
    |===========================|
    | Descripcion : ${detalle} 
    | Precio :$ ${precio}       
    |===========================|
    `;
    console.log (card);
    return "GRACIAS POR UTILIZAR NUESTRA WEB"
}