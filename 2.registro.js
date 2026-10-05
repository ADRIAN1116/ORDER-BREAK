document.getElementById("btnRegistro").addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmarPassword").value;

    if (
        nombre === "" ||
        correo === "" ||
        usuario === "" ||
        password === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const usuarioNuevo = {
        nombre,
        correo,
        usuario,
        password
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioNuevo));

    alert("Registro exitoso");
    location.href = "login.html";
});
