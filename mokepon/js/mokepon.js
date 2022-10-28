function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    }  else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma" 
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Selecciona a tu mascota")
    }
}

window.addEventListener("load", iniciarJuego)