console.log("ping validacion.js")
const form = document.getElementById('form-comprador');

// Función auxiliar para mostrar error en la interfaz
function mostrarError(idCampo, idError, mensaje) {
    const campo = document.getElementById(idCampo);
    const spanError = document.getElementById(idError);
    
    campo.classList.add('input-error');
    spanError.textContent = mensaje;
}

// Función auxiliar para limpiar el error cuando el usuario corrige
function limpiarError(idCampo, idError) {
    const campo = document.getElementById(idCampo);
    const spanError = document.getElementById(idError);
    
    campo.classList.remove('input-error');
    spanError.textContent = '';
}

// Validación en tiempo real mientras el usuario escribe/selecciona
document.getElementById('nombre').addEventListener('input', function() {
    if (this.value.trim() !== '') limpiarError('nombre', 'error-nombre');
});

document.getElementById('dni').addEventListener('input', function() {
    if (/^\d{7,8}$/.test(this.value.trim())) limpiarError('dni', 'error-dni');
});

document.getElementById('email').addEventListener('input', function() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim())) limpiarError('email', 'error-email');
});

document.getElementById('telefono').addEventListener('input', function() {
    if (/^\d{8,15}$/.test(this.value.trim())) limpiarError('telefono', 'error-telefono');
});

document.getElementById('fechaNacimiento').addEventListener('change', function() {
    if (this.value !== '') limpiarError('fechaNacimiento', 'error-fecha');
});

document.getElementById('domicilio').addEventListener('input', function() {
    if (this.value.trim() !== '') limpiarError('domicilio', 'error-domicilio');
});

document.getElementById('productoServicio').addEventListener('change', function() {
    if (this.value !== '') limpiarError('productoServicio', 'error-producto');
});

// Validación completa al hacer submit (Enviar)
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const domicilio = document.getElementById('domicilio').value.trim();
    const productoServicio = document.getElementById('productoServicio').value;

    let formularioValido = true;

    if (nombre === '') {
        mostrarError('nombre', 'error-nombre', 'El nombre es obligatorio.');
        formularioValido = false;
    }

    const regexDni = /^\d{7,8}$/;
    if (dni === '') {
        mostrarError('dni', 'error-dni', 'El DNI es obligatorio.');
        formularioValido = false;
    } else if (!regexDni.test(dni)) {
        mostrarError('dni', 'error-dni', 'Ingresá un DNI válido (7 u 8 números sin puntos).');
        formularioValido = false;
    }

    if (fechaNacimiento === '') {
        mostrarError('fechaNacimiento', 'error-fecha', 'La fecha de nacimiento es obligatoria.');
        formularioValido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        mostrarError('email', 'error-email', 'El correo electrónico es obligatorio.');
        formularioValido = false;
    } else if (!regexEmail.test(email)) {
        mostrarError('email', 'error-email', 'Ingresá un correo válido (ej: usuario@dominio.com).');
        formularioValido = false;
    }

    const regexTelefono = /^\d{8,15}$/;
    if (telefono === '') {
        mostrarError('telefono', 'error-telefono', 'El teléfono es obligatorio.');
        formularioValido = false;
    } else if (!regexTelefono.test(telefono)) {
        mostrarError('telefono', 'error-telefono', 'Ingresá un teléfono válido (solo números).');
        formularioValido = false;
    }

    if (domicilio === '') {
        mostrarError('domicilio', 'error-domicilio', 'El domicilio es obligatorio.');
        formularioValido = false;
    }

    if (productoServicio === '') {
        mostrarError('productoServicio', 'error-producto', 'Debés seleccionar un producto o servicio.');
        formularioValido = false;
    }

    if (formularioValido) {
        document.getElementById('mensaje-final').textContent = '¡Formulario enviado con éxito!';
        form.reset();
    }
});