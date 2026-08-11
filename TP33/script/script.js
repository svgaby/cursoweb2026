function mostrarCursos() {
    cursos.forEach((curso) => {
        const html = `<div class="card curso">
            <h1>${curso.nombre}</h1>
            <span>Alumnos: ${curso.alumnos.length}</span>
            <span>${curso.iniciado ? "Curso Iniciado" : "Curso Cerrado"}</span>
            <div class="btn" data-curso=${curso.id}>Ver Detalles</div>
                    </div>`;
        document.querySelector("#cursos").innerHTML += html;
    })
    document.querySelectorAll("#cursos .btn")
        .forEach((btn) => {
            btn.addEventListener("click", (e) => {
                console.log("click en boton de curso: " + e.target.dataset.curso)
                mostrarAlumnos(e.target.dataset.curso);
            })
        })
}

function mostrarAlumnos(idCurso) {

    document.querySelector("#detalles").style.display = "flex";
    // const cursoActual = cursos.find((curso) => {return curso.id === idCurso})
    // console.log(cursoActual);  //1 se prueva
    const cursoActual = cursos.find(curso => curso.id == idCurso)  // resumido

    document.querySelector("#detalles > h1").textContent = `detalle del curso ${cursoActual.nombre}`;

    document.querySelector("#detalles > span").textContent = `cantidad de alumnos: ${cursoActual.alumnos.length}`;

    // Crear targetas de alumnos
    let htmlCardAlumnos = "";
    cursoActual.alumnos.forEach((idAlumno) => {
        const alumnoActual = alumnos.find(alumno => alumno.id == idAlumno);
        htmlCardAlumnos += ` <div class="card alumno">
                <span>Nombre: ${alumnoActual.almuno}</span>
                <span>Apellido: ${alumnoActual.apellido}</span>
                <span>DNI: ${alumnoActual.dni}</span>
                <span>Localidad: ${alumnoActual.localidad}</span>
                </div>`;

    });
    document.querySelector("#listaAlumno").innerHTML = htmlCardAlumnos;
}
//mostrarCursos();
window.onload = () => { mostrarCursos(); }