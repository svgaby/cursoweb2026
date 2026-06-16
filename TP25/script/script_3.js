console.log ("ping script_03 ejercicios")

let mochila = ["Lapiz", "Cuaderno", "Goma", "Regla", "Colores"];
console.log(`Mochilla completa : ${mochila}`);

//acceder a item especifico
console.log (`Segundo elemento de la mocihla: ${mochila[1]}`)

//modificar
mochila[2] = "Sacapunta";

console.log(`Mochila Modificada: ${mochila}`);

// Largo de array
console.log(`Tengo tantos ${mochila.length} elementos en la mochila`)

// Seleccionar los extremos
console.log(`El primer elemento es ${mochila[0]}`)

console.log(`El ultimo elemento es: ${mochila[mochila.length - 1]}`);

// Agregar elemento
mochila.push("Marcador");
console.log(`Mochila con marcador ${mochila}`);


// Quitar elemtno
let itemRemovido = mochila.pop()
    console.log(`Mochila sin marcador ${mochila} --- elemento elimado ---${itemRemovido}---`);

//vaciar mochila

mochila =[];
console.log(`mochila vacia ${mochila}`);
