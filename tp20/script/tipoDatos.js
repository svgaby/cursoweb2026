console.log("ping tipoDato.js");

// tipo de datos

let numero = 44;
let string = "Cadena de Texto";
let booleano = true;  //false
let nulo = null;
let indefinido;
let array = [2, 18, "texto", false,]    //siempre el array en [] dos valores ordenados . de diferente naturaleza no interfiere con ninguno, se pueden anidar [1, [ 1, [1,  ]]]
let objeto = {
    nombre: "Gabriel", //cada dato esta etiquedato 
    apellido: "Lopez",
    telefono: 123456
}

console.log(numero);
console.log(typeof (numero))
console.log(typeof (string))
console.log(typeof (booleano))
console.log(typeof (nulo))
console.log(typeof (indefinido))
console.log(typeof (array))
console.log(typeof (objeto))

let num1 = 33;
let num2 ="22";
num2 = Number(num2);
console.log(num1 + num2);

let pi = "3.14159 es el valor de pi";

let piNumber = Number(pi);
console.log(piNumber, typeof(piNumber));

let piParseInt =  parseInt(pi);
console.log(piParseInt, typeof(piParseInt));

let piParseFloat = parseFloat(pi);
console.log(piParseFloat, typeof(piParseFloat))

let errorFloat = 100000 / 3;
console.log(errorFloat);


