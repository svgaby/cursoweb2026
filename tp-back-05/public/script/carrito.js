console.log("PING carrito.js")

document.querySelectorAll(".carritoProducto")    // . class  si es # id
    .forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // agregar producto al carrito
            console.log(e.target.dataset);
            const existe = carrito.find(item => item.id == e.target.dataset.id)
            if (existe) {
                //actualizo
                existe.cantidad++;
                carritoStats.cantidadProductos++;
                carritoStats.totalCarrito += parseFloat(e.target.dataset.precio);

            } else {
                carrito.push({
                    id: parseInt(e.target.dataset.id),
                    descripcion: e.target.dataset.descripcion,
                    precio: parseFloat(e.target.dataset.precio),
                    cantidad: 1

                })
                carritoStats.cantidadProductos++;
                carritoStats.totalCarrito += parseFloat(e.target.dataset.precio);
            }
            document.querySelector("#carritoIconoCantidad").textContent = carritoStats.cantidadProductos;

        })
    })

const carrito = [];
const carritoStats = {
    cantidadProductos: 0,
    totalCarrito: 0
}

document.querySelector("#carritoIcono").
    addEventListener("click", () => {
        const htmlModal = `<div class="modal">
    <h2>Carrito De Compras</h2>
    <table>
        <thead>
        <tr>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
        
        </tr>
        </thead>
        <tbody>
        ${carrito.map(item => `
            <tr>
            <td>${item.descripcion}</td>
            <td>${parseFloat(item.precio).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</td>
            <td>${item.cantidad}</td>
            <td>${(parseFloat(item.precio) * parseFloat(item.cantidad)).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</td>
        
            </tr>`).join("")}
        </tbody>
    </table>
    <input type="text" name="nombre" id="nombre" placeholder="Nombre" require>
    <input type="text" name="contacto" id="contacto" placeholder="Contacto" require>
    <button id="btnCerrar"> Cerrar</button>
    <button id="btnEnviar">Enviar</button>

    </div>
    <div class="screen"></div>`;
        document.querySelector("#modalCarrito").innerHTML = htmlModal;
        document.querySelector("#btncerrar")
            .addEventListener("click", () => {
                document.querySelector("#modalCarrito").innerHTML = ""
            });
        document.querySelector("#btnEnviar")
            .addEventListener("click", async () => {
                //validar
                if (carrito.length === 0) { return }
                //levantar datos
                const nombre = document.querySelector("#nombre").value;
                const contacto = document.querySelector("#contacto").value;
                console.log(nombre, contacto);
                if (nombre == "" || contacto == "") { return }
                //enviar pedido con fecht
                try {
                    let respuesta = await fetch("/productos/pedido/api", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            nombre: nombre,
                            contacto: contacto,
                            productos: carrito
                        })
                    })
                    respuesta = await respuesta.json();
console.log(respuesta);
                } catch (error) {
console.log("Error al enviar pedido", error);
                }
            });

    })



/* document.querySelector("#modalCarrito").
        innerHTML = htmlModal; */