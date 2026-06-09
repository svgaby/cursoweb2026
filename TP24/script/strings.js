console.log ("ping Strings")

// METODOS Y PROPIEDADES DE STRENGS

let letras = "abodefghijklmñopqrstuvwxyz";

// Propiedad length (largo)

const largo = letras.length;
console.log (largo);

//////////////////////////////////////////////////////
//  Metodos de seleccion
let letraNumero = letras.charAt(1);   //0 es la A
console.log (letraNumero);

letraNumero = letras.at(1);
console.log (letraNumero);

letraNumero = letras[1];
console.log (letraNumero);

///////////////////////////////////////////////////////
// Extraer una seccion de Texto.

let frase = "curso de programacion";

let seccion = frase.slice(0, 5);
console.log(seccion);

//let seccion = frase.slice(6, 8);   /////el 8 no lo toma es hasta el anterior
//console.log(seccion);

seccion = frase.slice(-14);
console.log(seccion);

seccion = frase.slice (10);
console.log (seccion);

/// CONVESION DE CAJA
const minuscula = frase.toLowerCase();
console.log (minuscula)
const mayuscula = frase.toUpperCase();
console.log(mayuscula)

//valor1.toLowerCase() === valor2.toLowerCase();

// Trim  (recortar)
let espacio = "     texto valdio     ";
console.log (espacio);
let recortado = espacio.trim();
console.log (recortado);

// valor1.toLowerCase().trim() === valor2.toLowerCase().trim()

//replace
let nombre ="Gabriel Omar"
console.log(nombre);
nombre = nombre.replace ("Omar" ,"CACHO")
console.log(nombre);

// ver regExp <----

//Includes
const colores = "Rojo, Verde, Azul";
let  consulta = colores.includes("Azul")
console.log(consulta);
consulta = colores.includes("azul")
console.log(consulta);

// Split  (seperar)
let arreglo = colores.split (",");
console.log (arreglo);