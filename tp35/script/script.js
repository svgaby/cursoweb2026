document.querySelector("#btnAgregar")
    .addEventListener("click", () => {
        // 1 leer el input de tarea
        const tareaNueva = document.querySelector("#cont > div > input").value;
        // 2 validad la info leida
        if (tareaNueva === "") { return }

        // 3 Crear objeto con dato del input
        const objTareaNueva = {
            nombre: tareaNueva,
            estado: "Pendiente",
            eliminado: false
        }

        // 4 Leer LS
        let tareasPrevias = localStorage.getItem("tareas");

        // 5 actualiz info con obj nuevo o crear nuevo objeto
        if (tareasPrevias === null) {
            localStorage.setItem("tareas", JSON.stringify([objTareaNueva]))

        } else {// 6 guardar en LS (update)
            tareasPrevias = JSON.parse(tareasPrevias);
            tareasPrevias.push(objTareaNueva);
            localStorage.setItem("tareas", JSON.stringify(tareasPrevias))
        }

        // 7 vaciar campos
        document.querySelector("#cont > div > input").value = "";

        // 8 actualizar tabla
        crearVistaTabla();

    })


function crearVistaTabla() {
    let tareas = localStorage.getItem("tareas");
    if (tareas === null) { return };
    tareas = JSON.parse(tareas);
    let salidaHTML = "";
    tareas.forEach((tarea, i) => {
        if (tarea.eliminado) { return }
        salidaHTML += `<tr>
                    <td>${tarea.nombre}</td>

                    <td><span data-index="${i}") class="btn estado 
                    ${tarea.estado.toLowerCase()}">${tarea.estado}</span></td>
                    <td>
                        <div class="btn btnEditar" id="btnEditar" data-index="${i}">Editar</div>
                        <div class="btn btnElimar" id="btnElimar" data-index="${i}">Eliminar</div>
                    </td>
                </tr>`;
    });
    document.querySelector("table tbody").innerHTML = salidaHTML;
    // eschcuar eventos de botones nuevos
    crearEventosBotones();
}

crearVistaTabla();

function crearEventosBotones() {
    document.querySelectorAll(".btnEditar")
        .forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                console.log("btn boton editar precionada para indice: " + e.target.dataset.index);
                // tomar nuevo dato
                const nuevoNombre = window.prompt("Ingrese un nuevo nombre para la tarea");
                //validar nuevo dato
                if (nuevoNombre.trim() === "") { return }  // incluye espacios en blancos
                //recuperar informacion del LS
                let tareas = localStorage.getItem("tareas");
                tareas = JSON.parse(tareas);
                // modifica propiedad del objeto
                tareas[e.target.dataset.index].nombre = nuevoNombre;
                // guardar en LS con las modificaiones
                localStorage.setItem("tareas", JSON.stringify(tareas));
                //window.location.reload;  //manda un f5
                crearVistaTabla();
            })
        })

    document.querySelectorAll(".btnElimar")
        .forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                console.log("btn boton eliminar precionada para indice: " + e.target.dataset.index)
                //elimanar elemento con soft delete
                //recuperar informacion del LS
                let tareas = localStorage.getItem("tareas");
                tareas = JSON.parse(tareas);
                // modifica propiedad del objeto
                tareas[e.target.dataset.index].eliminado = true;
                // guardar en LS con las modificaiones
                localStorage.setItem("tareas", JSON.stringify(tareas));
                //window.location.reload;  //manda un f5
                crearVistaTabla();
            })
        })
    document
        .querySelectorAll(".estado")
        .forEach((btn) => {
            btn.addEventListener("click", (e) => {
                console.log("btn estado " + e.target.dataset.index)
                //recuperar informacion del LS
                let tareas = localStorage.getItem("tareas");
                tareas = JSON.parse(tareas);
                // modifica propiedad del objeto
                if (tareas[e.target.dataset.index].estado === "Pendiente") {


                    tareas[e.target.dataset.index].estado = "Completada"
                }
                else {
                    tareas[e.target.dataset.index].estado = "Pendiente"
                }
                // guardar en LS con las modificaiones
                localStorage.setItem("tareas", JSON.stringify(tareas));
                //window.location.reload;  //manda un f5
                crearVistaTabla();
            })
        })
}