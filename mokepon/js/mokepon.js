const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const inputLangostelvis = document.getElementById("langostelvis")
const inputTucapalma = document.getElementById("tucapalma")
const inputPydos = document.getElementById("pydos")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let hipodoge = new Mokepon("Hipodoge", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png", 5)

let capipepo = new Mokepon("Capipepo", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon("Ratigueya", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png", 5)

let langostelvis = new Mokepon("Langostelvis", "http://pngimg.com/uploads/pokemon/pokemon_PNG161.png", 5)

let tucapalma = new Mokepon("Tucapalma", "http://pngimg.com/uploads/pokemon/pokemon_PNG159.png", 5)

let pydos = new Mokepon("Pydos", "http://pngimg.com/uploads/pokemon/pokemon_PNG145.png", 5)



hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierra"}
)
capipepo.ataques.push(
    
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    
)
ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🌱", id: "boton-tierra"}
)
langostelvis.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🌱", id: "boton-tierra"}
)
tucapalma.ataques.push(
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierra"}
)
pydos.ataques.push(
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💧", id: "boton-agua"}
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <div class="div-container1">
                <div class="div-sub1">
    
                    <input type="radio" name="mascota" id=${mokepon.nombre}>
                    <label class="div-container1" for=${mokepon.nombre}>${mokepon.nombre}</label>
                </div>
                <div class="div-sub2" style="background-color: lightblue ;">
                    <img src=${mokepon.foto} alt=${mokepon.nombre} >
                </div>

                
        </div>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    sectionReiniciar.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)

    botonReiniciar.addEventListener("click", reiniciarJuego)

}
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"
    

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
function combate () {
    

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
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
function crearMensaje(resultado) {
    

    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    /* sectionMensajes.appendChild(notificacion) */
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    /* let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + resultado */

}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = "block"
    //boton fuego detenerse
    let botonnoneF = document.getElementById("boton-fuego")
    botonnoneF.style.backgroundColor = "black"
    botonnoneF.style.border = "2px solid white"
    botonnoneF.style.color = "white"

    let botonnoneA = document.getElementById("boton-agua")
    botonnoneA.style.backgroundColor = "black"
    botonnoneA.style.border = "2px solid white"
    botonnoneA.style.color = "white"

    let botonnoneT = document.getElementById("boton-tierra")
    botonnoneT.style.backgroundColor = "black"
    botonnoneT.style.border = "2px solid white"
    botonnoneT.style.color = "white"



}


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)