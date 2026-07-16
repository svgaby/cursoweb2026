console.log("ping fichas personales")

document.querySelector("#datos .btn").addEventListener("click", () => {
    //1. captura de elmento imput
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    //2. Validar datos
    if (nombre.value == " " || apellido.value == "" || dni.value == "") {
        console.log("Completar todos los datos del formulario")
        mostrarError("Completar todos los datos del formulario")
        return
    }


    // 3. Construir Objeto
    const datosPersonales = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value,
    }
    //console.log(datosPersonales);
    // 4. guardar en array
    registros.push(datosPersonales);

    //5. Limpiar Vista
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    nombre.focus();

    // 6. actualiar contador
    document.querySelector("#contador")
        .textContent = registros.length;
})

function mostrarError(txt)     // txt o msg   es un mensaje
{
    const errorCont = document.querySelector(".error");
    errorCont.textContent = txt
    errorCont.style.transform = "translatey(0)"
    setTimeout(() => {
        errorCont.style.transform = "translatey(100px)"
    }, 1000 * 6)
}

let registros = [];

document.querySelector(".caja #mostrar")
    .addEventListener("click", () => {
        document.querySelector("#salida").innerHTML = "";
        if (registros.length == 0) {
            mostrarError("No Hay Registros para Mostrar");
            return;
        }
        registros.forEach((datosPersonales) => {
            const vista = `<div class="card">
        <div>Nombre: ${datosPersonales.nombre}</div>
        <div>Apellido ${datosPersonales.apellido}</div>
        <div>DNI ${datosPersonales.dni}</div>
        </div>`;
            document.querySelector("#salida").innerHTML += vista;
        })

    })

document.querySelector(".caja #vaciar")
    .addEventListener("click", () => {
        /// captirar elemtnos
        const nombre = document.querySelector("#nombre");
        const apellido = document.querySelector("#apellido");
        const dni = document.querySelector("#dni");
        //vaciar inputs
        nombre.value = "";
        apellido.value = "";
        dni.value = "";
        nombre.focus();
        //reinicar contador
        document.querySelector("#contador")
        .textContent = 0;   //cero lo borra
        //caciar salida
        document.querySelector("#salida").innerHTML = "";
        //vaciar array del registro
        registros = []
    })