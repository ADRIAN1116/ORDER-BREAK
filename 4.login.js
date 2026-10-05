document.getElementById("btnLogin").addEventListener("click", () => {
    const usuarioIngresado = document.getElementById("usuario").value;
    const passwordIngresada = document.getElementById("password").value;

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
        alert("No existe un usuario registrado");
        return;
    }

    if (
        usuarioIngresado === usuarioGuardado.usuario &&
        passwordIngresada === usuarioGuardado.password
    ) {
        localStorage.setItem("sesion", "activa");
        window.location.href = "inicio.html";
    } else {
        alert("Datos incorrectos");
    }
});
