console.log("ping PRACTICAS DE FUNCIONES 1");

function saludar (nombre, edad){
//console.log(`Hola, soy ${nombre} y tengo ${edad} años`);    1111111111111111
const respuesta = `Hola, soy ${nombre} y tengo ${edad} años`;
return respuesta;
}

// saludos ("GABY", 45); 1111111111111

const saludo = saludar ("GABY", 45);
console.log (saludo);

const saludo2 = saludar ("MACA",28);
console.log (saludo2)

function saludarAbreviada(nombre, edad){
    return `hola, soy ${nombre} y tengo ${edad} años.`;
}
console.log (saludarAbreviada ("AMIGO", 1000));