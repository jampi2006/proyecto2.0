function loguear()
{
let usuario = document.getElementById("usuario").value;
let contraseña = document.getElementById("contraseña").value;

if (usuario == "jamphier@gmail.com" && contraseña == "2020") {
    window.location="index.html";
}

else
{
    alert("Datos incorrectos")
}


}


