console.log("PING catalogo.js")

// Array de objetos con servicios y productos de El Faro Holístico
const elementosFaro = [
    {
        id: 1,
        nombre: "Sesión de Reiki Integral",
        descripcion: "Armonización energética a distancia y alineación de chakras.",
        categoria: "Servicios",
        duracion: "60 min",
        modalidad: "A distancia"
    },
    {
        id: 2,
        nombre: "Spray Áurico de Limpieza",
        descripcion: "Blend aromaterapéutico con aceites esenciales y cuarzos.",
        categoria: "Biocosmética",
        duracion: "Frasco 100ml",
        modalidad: "Envío / Retiro"
    },
    {
        id: 3,
        nombre: "Escaneo con Péndulo Hebreo",
        descripcion: "Diagnóstico radiónico y limpieza de miasmas energéticos.",
        categoria: "Servicios",
        duracion: "45 min",
        modalidad: "A distancia"
    },
    {
        id: 4,
        nombre: "Bálsamo Herbal Natural",
        descripcion: "Ungüento botánico para dolores musculares y relajación.",
        categoria: "Biocosmética",
        duracion: "Pote 50g",
        modalidad: "Envío / Retiro"
    }
];

// Elementos del DOM
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const inputBuscar = document.getElementById('input-buscar');
const selectCategoria = document.getElementById('select-categoria');
const mensajeError = document.getElementById('mensaje-error-busqueda');
const listaSeleccionados = document.getElementById('lista-seleccionados');

// Recuperar selección previa de localStorage (Requerimiento D)
let seleccionados = JSON.parse(localStorage.getItem('seleccionFaro')) || [];

// Función para renderizar el catálogo dinámicamente
function renderizarCatalogo(arrayDeElementos) {
    contenedorTarjetas.innerHTML = '';

    if (arrayDeElementos.length === 0) {
        mensajeError.classList.remove('mensaje-oculto');
        return;
    } else {
        mensajeError.classList.add('mensaje-oculto');
    }

    arrayDeElementos.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        // Verificamos si ya está seleccionado para cambiar el estado visual
        const estaSeleccionado = seleccionados.some(s => s.id === item.id);

        tarjeta.innerHTML = `
            <div class="tarjeta-header">
                <span class="badge-categoria">${item.categoria}</span>
                <h4>${item.nombre}</h4>
            </div>
            <div class="tarjeta-body">
                <p>${item.descripcion}</p>
                <p><strong>Duración / Presentación:</strong> ${item.duracion}</p>
                <p><strong>Modalidad:</strong> ${item.modalidad}</p>
            </div>
            <div class="tarjeta-footer">
                <button class="btn-seleccionar ${estaSeleccionado ? 'seleccionado' : ''}" data-id="${item.id}">
                    ${estaSeleccionado ? 'Seleccionado ✓' : 'Seleccionar'}
                </button>
            </div>
        `;

        contenedorTarjetas.appendChild(tarjeta);
    });

    activarBotonesSeleccion();
}

// Función de filtrado (Búsqueda por texto y categoría)
function filtrarElementos() {
    const textoBusqueda = inputBuscar.value.toLowerCase();
    const categoriaFiltro = selectCategoria.value;

    const filtrados = elementosFaro.filter(item => {
        const coincideNombre = item.nombre.toLowerCase().includes(textoBusqueda);
        const coincideCategoria = categoriaFiltro === 'todos' || item.categoria === categoriaFiltro;
        return coincideNombre && coincideCategoria;
    });

    renderizarCatalogo(filtrados);
}

// Manejo de la selección de elementos
function activarBotonesSeleccion() {
    const botones = document.querySelectorAll('.btn-seleccionar');
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idItem = parseInt(e.target.getAttribute('data-id'));
            const itemEncontrado = elementosFaro.find(i => i.id === idItem);

            const indexExistente = seleccionados.findIndex(s => s.id === idItem);

            if (indexExistente === -1) {
                // Agrega a la selección
                seleccionados.push(itemEncontrado);
            } else {
                // Quita si ya estaba seleccionado
                seleccionados.splice(indexExistente, 1);
            }

            // Guardar en localStorage
            localStorage.setItem('seleccionFaro', JSON.stringify(seleccionados));
            
            // Actualizar vista
            renderizarCatalogo(elementosFaro.filter(item => {
                const texto = inputBuscar.value.toLowerCase();
                const cat = selectCategoria.value;
                return item.nombre.toLowerCase().includes(texto) && (cat === 'todos' || item.categoria === cat);
            }));
            actualizarResumenSeleccion();
        });
    });
}

// Actualizar panel de selección actual
function actualizarResumenSeleccion() {
    if (seleccionados.length === 0) {
        listaSeleccionados.innerHTML = '<p>No hay elementos seleccionados.</p>';
        return;
    }

    listaSeleccionados.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('lista-resumen');

    seleccionados.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `${s.nombre} (${s.categoria})`;
        ul.appendChild(li);
    });

    listaSeleccionados.appendChild(ul);
}

// Event Listeners para búsqueda en tiempo real
inputBuscar.addEventListener('input', filtrarElementos);
selectCategoria.addEventListener('change', filtrarElementos);

// Carga inicial al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo(elementosFaro);
    actualizarResumenSeleccion();
});