let no = document.getElementById('no')
let si = document.getElementById('si')
let boton = document.getElementById('aggElements')

boton.addEventListener('click', function () {
    si.innerHTML = no.value
})

let no2 = document.getElementById('no2')
let si2 = document.getElementById('si2')
let boton2 = document.getElementById('aggElements')

boton2.addEventListener('click', function () {
    si2.innerHTML = no2.value
})