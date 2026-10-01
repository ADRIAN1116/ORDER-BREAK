// Verifica sesión
if (localStorage.getItem("sesion") !== "activa") {
    window.location.href = "login.html";
}

function agregar(nombre, precio) {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert(nombre + " agregado al carrito");
}