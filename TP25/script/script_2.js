console.log("ping HOLA scrip_2.js")

//Iteraciones - repeticiones

// // forEach()   por cada uno o por cada

const colores = ["rojo", "azul", "verde", "amarillo", "naranja"];

colores.forEach((color, i) => {
    console.log(color);
    console.log(i);
});

let numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((numero) => {
    console.log(numero * 10);
});

console.log(numeros);

numeros.forEach((x, i) => {
    numeros[i] *= 10;
});

console.log(numeros);

numeros = numeros.join("*");
console.log(numeros);
numeros = numeros.split("*");
console.log(numeros);

numeros.forEach((numero, i) => {
    numeros[i] = Number(numero)
});
console.clear();
console.log(numeros);

// // Metodo find()

// completa const busqueda = colores.find((dato)=>{return  dato == "amarillo"});
const busqueda = colores.find(dato => dato == "amarillo");
console.log(busqueda);

const buscasOrden = colores.findIndex(dato => dato == "amarillo");
console.log(buscasOrden);

colores[buscasOrden] = "gris";
//colores[colores.findIndex(dato => dato == "amarillo")] = "gris";  remplaza desde la 45 a 48
console.log(colores);
console.clear();


// Metodo reduce()
const total = numeros
    .reduce((acumulador, numero) => acumulador + numero);
console.log(total);

// Array de arrays   = array anidado
const datos = [
    ["pablo", 123],
    ["sergio", 456],
    ["marcos", [789,1011]]
];

// ver datos de sergio en consola
console.log(datos[1]);

// ver numero de pablo
console.log(datos [0] [1]);

//ver primer de marcos
console.log(datos [2] [1] [0]);    // para qe salga 789 = 0    numero 1011 = 1 es el lugar que ocupa en el array