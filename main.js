function loguear()
{
let usuario = document.getElementById("usuario").value;
let contraseña = document.getElementById("contraseña").value;
let nombre = document.getElementById("nombre").value;

if (usuario == "jamphier@gmail.com" && contraseña == "2020" && nombre == "jamphier") {
    window.location="index.html";
}

else
{
    alert("Datos incorrectos")
}


}


