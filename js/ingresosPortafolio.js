let inputNombre = document.getElementById('nombre')

let infoNombre = document.getElementById('infos1')

let agg = document.getElementById('aggElements')

agg.addEventListener('click', function () {
    infoNombre.innerHTML = inputNombre.value
})
