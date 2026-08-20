console.log("PING SCRIPT 1")

// Leer archivo de almacenamiento local 
fetch("./data/datos.json")
.then((res) => {
    console.log(res);
    if(res.ok === false) {
        throw new Error (" ERROR EN EL FETCH")
    }
    return res.json();
})

.then ( (res) => {
        console.log(res);
        crearVista(res);
})

.catch ((error) => {
    console.log(error);
})

function crearVista(datos){
    let html =`<table>
    <thead>
    <tr>
    <th> Nomnbre </th>
    <th> Apellido </th>
    </tr>
    </thead>
    <tbody>`

    datos.forEach(dato => {
        html += `
        <tr>
        <th> ${dato.nombre} </th>
        <th> ${dato.apellido} </th>
        </tr>`
    })

html += `</tbody> </table>`
document.querySelector("#salida")
.innerHTML =  html;
}