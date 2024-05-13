let inputNombre = document.getElementById('nombre')

let infoNombre = document.getElementById('infos1')

let agg = document.getElementById('aggElements')

agg.addEventListener('click', function () {
    infoNombre.innerHTML = inputNombre.value
})

let inputApellido = document.getElementById("apellidos")

let infoApellido = document.getElementById("infos2")

let agg2 = document.getElementById('aggElements')

agg2.addEventListener("click" , function() {
    infoApellido.innerHTML = inputApellido.value
})

let inputStack = document.getElementById("stack")

let infoStack = document.getElementById('infos3')

let agg3 = document.getElementById('aggElements')

agg3.addEventListener("click" , function() {
    infoStack.innerHTML = inputStack.value
})

let inputNpro = document.getElementById("npro")

let infoNpro = document.getElementById('infos4')

let agg4 = document.getElementById('aggElements')

agg4.addEventListener("click" , function() {
    infoNpro.innerHTML = inputNpro.value
})

let inputCorreo = document.getElementById("correo")

let infoCorreo = document.getElementById('infos5')

let agg5 = document.getElementById('aggElements')

agg5.addEventListener("click" , function(){
    infoCorreo.innerHTML = inputCorreo.value
})


