console.log ("HOLA MUNDO script_01.js")

const curso = {
    titulo: "Programacion Web",
    sede: "San Martin",
    Año: 2026,
    inscriptos: 26,
    saludar: ()=> {
        console.log("Hola Alumnos" + curso.titulo)
    }
}

// accedera propiedades
console.log(curso.sede);
console.log(curso ["Año"]);

//modificar propiedades
curso.sede = "San Migruel"
//console.log(curso);

//agregar propiedad nueva
curso.turno = "Noche"

// eliminar propiedad año
delete curso.Año

console.log(curso);
console.clear();

// iteracion
for(const dato in curso ){
    console.log(dato)  //Lee la clave (key)
console.log(curso[dato]) // Lee Valor
}
console.clear();

//Metodos
curso.saludar();