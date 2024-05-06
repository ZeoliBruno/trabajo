document.addEventListener('DOMContentLoaded', function() {
    const productosBtn = document.getElementById('productos-btn');
    const productosSubMenu = document.getElementById('productos-submenu');

    productosBtn.addEventListener('click', function() {
        productosSubMenu.classList.toggle('mostrar');
    });

    // Función para abrir la ventana modal con los detalles del producto
    function mostrarDetallesProducto(nombre, imagen, descripcion) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
            <div class="modal-contenido">
                <span class="cerrar-modal">&times;</span>
                <img src="${imagen}" alt="${nombre}">
                <h2>${nombre}</h2>
                <p>${descripcion}</p>
            </div>
        `;

        document.body.appendChild(modal);

        const cerrarModal = modal.querySelector('.cerrar-modal');
        cerrarModal.addEventListener('click', () => {
            modal.remove();
        });

        // Cerrar modal si se hace clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Event listener para abrir la ventana modal al hacer clic en un producto
    document.querySelectorAll('.recomendacion').forEach((recomendacion) => {
        const imagen = recomendacion.querySelector('img');
        const nombre = recomendacion.querySelector('h3').innerText;
        const descripcion = recomendacion.querySelector('p').innerText;

        imagen.addEventListener('click', () => {
            mostrarDetallesProducto(nombre, imagen.src, descripcion);
        });
    });
});
