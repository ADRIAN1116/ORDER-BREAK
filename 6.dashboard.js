// Verificar sesión
if (localStorage.getItem("sesion") !== "activa") {
    window.location.href = "login.html";
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
}