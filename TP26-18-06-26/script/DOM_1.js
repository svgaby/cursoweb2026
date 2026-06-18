console.log ("ping DOM_01");

console.log(window); 

console.log(document); 

let query = document.querySelector("h1");
console.log(query);

query = document.getElementsByClassName("claseDiv");
console.log(query);

query = document.getElementById("idDiv");
console.log(query);

query = document.querySelectorAll("div");
console.log(query);

console.clear();

query = document.querySelector("#idDiv");    /// . = class     ///etiqueta nada
console.log(query.textContent);

document.querySelector("#idDiv").textContent = "Nuevo Texto";

document.querySelector("#idDiv").textContent += " - Desde Java Scritp";

document
.querySelector("#estiloDiv")
.style.border  = "4px solid green";

document
.querySelector("#estiloDiv")
.style.backgroundColor  = "yellow";

document
.querySelector("#divVacio")
//// .textContent = "<h2> Subtitulo agregado <-------------------</h2>";
.innerHTML += "<h2> Subtitulo agregado <-------------------<h2>";

const element = document.createElement("p");
element.textContent = "Parrafo creado con createElement";
document.querySelector("#divVacio")
.appendChild(element);