// carrito.js
if (localStorage.getItem("sesion") !== "activa") {
    window.location.href = "3.login.html";
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const lista = document.getElementById('lista-carrito');
const total = document.getElementById('total-carrito');

if (carrito.length === 0) {
    lista.innerHTML = '<p>No tienes productos agregados.</p>';
    total.textContent = 'Total: $0';
} else {
    let totalPrecio = 0;
    lista.innerHTML = carrito.map(item => {
        totalPrecio += Number(item.precio);
        return `<p>${item.nombre} - $${item.precio.toLocaleString('es-CL')}</p>`;
    }).join('');
    total.textContent = `Total: $${totalPrecio.toLocaleString('es-CL')}`;
}

function limpiarCarrito() {
    localStorage.removeItem('carrito');
    window.location.reload();
}
