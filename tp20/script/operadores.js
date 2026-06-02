console.log("pimg Operadores.js");

// Operadores Aritmeticos

let numA = 20;
let numB = 8;

console.log(numA + numB)
console.log(numA - numB)
console.log(numA * numB)
console.log(numA / numB)
console.log(numA % numB)

let numC = 10;
numC = numC + 2;
numC += 2; //numC = numC + 2;
numC -= 5; //numC = numC - 5;
numC *= 2; //numC = numC * 2;
numC /= 3; //numC = numC / 3;
numC++; // numC = nunC + 1;
numC--; // numC = nunC - 1;
console.log(numC);

// Operadores Logicos

let datoA = 10;
let datoB = 20;
let datoC = 20;
let datoD = "20";

console.log(datoA > datoB);
console.log(datoA < datoB);

// iguadad simple

console.log(datoA == datoC);
console.log(datoB == datoB); // false
console.log(datoB == datoC); // true
console.log(datoA != datoB); //true
console.log(datoC == datoD); //true

// Igualadad estricta
console.log(datoC === datoD); //false
console.log(datoC === Number(datoD)); //true

// and y Or (&& y ||)
console.log(2 == 2 && 3 == 3);  //true
console.log(2 == 2 && 3 == 4);  //false  si una es falsa cae toda la operacion
console.log(2 == 2 || 3 == 4);  // true 1 de las dos es verdad tira verdad

//Inversion
console.log(!true);

