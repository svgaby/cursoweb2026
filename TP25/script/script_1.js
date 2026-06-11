console.log ("ping ARRAYS");

// arrays (arreglo)

const ejemplo1 = ["texto", "otro", "mas"];   ///// con , hago otra
const ejemplo2 = ["text", 22, true, undefined, null,[ 1, 2, 3, "text2"]];

// Manejo de Arrays
const numeros = [2, 9, 11, 5, 78, 123];
console.log(numeros);

console.log(numeros[2]);

// Agregar un dato
numeros.push(99);
console.log(numeros);

numeros.unshift(88);
console.log(numeros);

//Quitar datos
numeros.pop(   ); //quita el ultimo dato
console.log(numeros);

numeros.shift();
console.log(numeros);

//poner pantalla en cero en limpio
console.clear();

//Metodo splice()

const letras = ["A", "B", "C", "D"];
console.log(letras);

letras.splice(1, 2);   // 1 numero el inicio, 2 numero cuantos borra 
console.log(letras);

letras.splice(1, 0, "b", "c" )  
console.log(letras);

letras.splice(4, 0 ,"e", "f");    /// si el 3 es el ultimo empiezo agragrar del numero que sigue que es el 4 en este caso
console.log(letras);

// unir y separar arrays
const  unido = numeros.join("/"); //trae en consola a lo que esta escrito en esa variable, el / si cambio la , por algo aqui /
console.log(unido);

const separado = unido.split("/")
console.log (separado);
console.log(numeros);

// Ordenar
console.clear();

const caracteres = ["A", "C" ,"D", "B"];
console.log(caracteres);

caracteres.sort();  //sort ordena
console.log(caracteres);  

console.log(numeros);
numeros.sort((a, b) => {return a - b});   // mas repusido   => a - b  de menor a mayor y b -a de mayor a nemor
console.log(numeros);

// Copiar un Arrays



console.clear()
// Copia referencial
let array1=[1, 2 ,3 ,4];
let array2= array1;
console.log(array1)
console.log(array2)

array1.push(5);
console.log(array1);
console.log(array2);

// Shallow copy (copia superficial)
let array3 = ["A", "B", "C"];
let array4 = [... array3];

array3.push("D");
console.log(array3);
console.log(array4);

// limite de shallow copy
let array5 = [1, 2 , ["A", "B"]];
let array6 = [...array5];

array5.push(3);

console.log(array5);
console.log(array6);

array5[2].push("C");
console.log(array5);
console.log(array6);

// Deep Clone
let array7 = [3, 4, ["Y", "Z"]];
let array8 = JSON.stringify(array7);
console.log(array7);
console.log(array8);
array8 = JSON.parse(array8);
console.log(array8)