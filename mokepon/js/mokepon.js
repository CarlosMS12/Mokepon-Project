let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    sectionSeleccionarAtaque.style.display = "none"
    let botonMascotaJugador = document.getElementById("boton-mascota")

    

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
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

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML = "Hipodoge "
    } else if(mascotaAleatorio==2){
        spanMascotaEnemigo.innerHTML = "Capipepo "
    } else if(mascotaAleatorio==3){
        spanMascotaEnemigo.innerHTML = "Ratigueya "
    } else if(mascotaAleatorio==4){
        spanMascotaEnemigo.innerHTML = "Langostelvis "
    } else if(mascotaAleatorio==5){
        spanMascotaEnemigo.innerHTML = "Tucapalma "
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos "
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
    
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + resultado

    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}
function combate () {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("-Empate")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("-Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("-Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("-Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("-Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
       
    }
    revisarVidas()
}
function revisarVidas() {
    if (vidasEnemigo==0) {
        crearMensajeFinal("FELICITACIONES! GANASTE :)")
    } else if (vidasJugador==0) {
        crearMensajeFinal("Lo siento, perdiste :(")
    }
}
function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)