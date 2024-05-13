const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'registrar.html'
}

const cerrar = document.querySelector('#cerrar')

cerrar.addEventListener('click', ()=>{
    alert('Chao sapo')
    localStorage.removeItem('login_success')
    window.location.href = 'registrar.html'
})

let nombre = document.getElementById('escribir')
let salidaNombre = document.getElementById('nombre')
let boton= document.getElementById('aggElements')

boton.addEventListener('click', function () {
    salidaNombre.innerHTML = nombre.value
})

let escribir2 = document.getElementById("escribir2")

let nivel2 = document.getElementById("nivel")

let boton2 = document.getElementById('aggElements')

boton2.addEventListener("click" , function() {
    nivel2.innerHTML = escribir2.value
})

let escribir3 = document.getElementById("escribir3")

let correo = document.getElementById("correo")

let boton3 = document.getElementById('aggElements')

boton3.addEventListener("click" , function() {
    correo.innerHTML = escribir3.value
})