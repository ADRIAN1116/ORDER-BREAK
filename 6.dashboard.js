if (localStorage.getItem("sesion") !== "activa") {
    window.location.href = "3.login.html";
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
}
