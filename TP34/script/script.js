localStorage.setItem("test", "test de local storage");

const dato = localStorage.getItem("test");
console.log(dato);

localStorage.clear();

document.querySelector ("#btnGrabar")
.addEventListener("click",()=>{
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
// validacion minima
if (nombre === "" || apellido === ""){
    console.error("completar amboscampo")
    return
}

// crear objeto con los valores
const datos ={
    nombre: nombre,  // pongo nombre, simplificado si es el mismo nombre
    apellido: apellido,
}

let datosPrevios =localStorage.getItem("datos");
if(datosPrevios === null){
    datosPrevios = []
}else {
    datosPrevios = JSON.parse(datosPrevios);
}
datosPrevios.push(datos);
// grabar en el LS  local storage
localStorage.setItem("datos", JSON.stringify(datosPrevios));


})

document
.querySelector("#btnLeer")
.addEventListener("click",() => {
    let datos = localStorage.getItem("datos");
    if(datos === null){console.log("LS VACIO");
        return;
    }
    datos = JSON.parse(datos);
    console.log ("info del LS:" , datos)
})

document.querySelector("#btnEliminar")
.addEventListener("click", () => {
    localStorage.clear();
    console.clear();
})

