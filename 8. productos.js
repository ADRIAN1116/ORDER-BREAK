if (localStorage.getItem("sesion") !== "activa") {
    window.location.href = "3.login.html";
}

function agregar(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(nombre + " agregado al carrito");
}
