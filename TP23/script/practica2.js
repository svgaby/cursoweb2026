console.log("ping PRACTICA 2");

function conversor(minutos) {
    let respuesta = minutos * 60;    // let o const
    return respuesta;
    // return minutos *60;   // simplifica desde linea 4 y 5 
}

// const conversor = (minutos) => minutos * 60;  // resume  linea 3 a 7 

console.log(conversor(6));