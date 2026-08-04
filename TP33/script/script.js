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
            btn.addEventListener("click", (e) => { console.log("click en boton de curso: " + e.target.dataset.curso) })
        })
}

function mostrarAlumnos(idCurso){}



//mostrarCursos();
window.onload = () => { mostrarCursos(); }