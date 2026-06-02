console.log("ping condicionales");

if (2 == 3) {
    console.log("operacion logica verdadera");
}
else {
    console.log("opercaiones logica falsa");
}

// let color = window.prompt("COlor del Semaforo");

let color = "verde";

if (color == "verde") {
    console.log("AVANCE");
}
else if (color == "amarillo") { 
    console.log("precaucion"); }
else if (color == "rojo") { 
    console.log("PARAR"); }
else  { console.error("ERROR - SEMAFORO") }



let compra = window.prompt("monto de la compra");



if (compra >= 50000 ) {
    console.log("descuento del 25%");
    console.log("Valor a Pagar" ,(compra * 0.75));
}
else if (compra >= 20000) {
    console.log("descuento del 10%")
    console.log("Valor a Pagar", (compra *0.9));
}
else {
    console.log("sin descuento")
    console.log("Valor De compra",(monto));
}

