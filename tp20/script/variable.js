let miVariable = 123;
console.log(miVariable)

miVariable = 456;
console.log(miVariable)

const nombre ="Gabriel";
console.log(nombre);

// nombre = "CACHO"

const apellido = "Angeto";
console.log(nombre, apellido);

// const nombreUsuario = window.prompt("Ingrese su Nombre");
// console.log(nombreUsuario);              //alt + shift + a /* */

// Scoope - alcance  GOBLA en bloque Y LOCAL entre {}  

let color = "Rojo";
console.log(color);
{
    let color = "gris";    // si pongo color ="gris" cambia el original y ahora es gris difente al let color
    console.log(color);
    let numero = 17;
}
console.log (color);
