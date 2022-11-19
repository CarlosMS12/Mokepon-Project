const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos= []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
/* let ataquesJugador = [] */
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-64-imgs-personajes-fondo/programar/mokepon/assets/mokemap.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0,mapa.width - this.ancho)
        this.y = aleatorio(0,mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
let hipodoge = new Mokepon("Hipodoge", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png")

let capipepo = new Mokepon("Capipepo", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png")

let ratigueya = new Mokepon("Ratigueya", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png")

let langostelvis = new Mokepon("Langostelvis", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png")

let tucapalma = new Mokepon("Tucapalma", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png")

let pydos = new Mokepon("Pydos", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png")


const HIPODOGE_ATAQUES = [
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierra"}
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
/* hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES) */

const CAPIPEPO_ATAQUES = [
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
/* capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES) */

const RATIGUEYA_ATAQUES =[
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🌱", id: "boton-tierra"}
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
/* ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES) */

const LANGOSTELVIS_ATAQUES = [
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🌱", id: "boton-tierra"}
]
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
/* langostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES) */

const TUCAPALMA_ATAQUES = [
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierra"}
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
/* tucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES) */

const PYDOS_ATAQUES = [
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🌱", id: "boton-tierra"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💧", id: "boton-agua"}
]
pydos.ataques.push(...PYDOS_ATAQUES)
/* pydosEnemigo.ataques.push(...PYDOS_ATAQUES) */


mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <div class="div-container1">
                <div class="div-sub1">
    
                    <input type="radio" name="mascota" id=${mokepon.nombre}>
                    <label class="div-container1" for=${mokepon.nombre}>${mokepon.nombre}</label>
                </div>
                <div class="div-sub2" id=${mokepon.nombre}>
                    <img src=${mokepon.foto} alt=${mokepon.nombre} >
                </div>
                
        </div>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
    })

    sectionReiniciar.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    


    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()

}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function(res){
            if (res.ok) {
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = "none"
    
 
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }  else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("Selecciona a tu mascota")
    }

    seleccionarMokepon(mascotaJugador) 

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    } )
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")

/*     botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra) */
}
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.backgroundColor = "#F586"
                boton.disabled = true
                boton.style.border = "2px solid black"
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.backgroundColor = "#F586"
                boton.disabled = true
                boton.style.border = "2px solid black"
            } else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.backgroundColor = "#F586"
                boton.disabled = true
                boton.style.border = "2px solid black"
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://127.0.0.1:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch (`http://127.0.0.1:8080/mokepon/${enemigoId}/ataques`)
    .then(function(res) {
        if (res.ok) {
            res.json()
            .then(function({ ataques }) {
                if (ataques.length === 5) {
                    ataqueEnemigo = ataques
                    combate()
                }
            })
        }
    })
}

function seleccionarMascotaEnemigo(enemigo){
    /* let mascotaAleatorio = aleatorio(0, mokepones.length -1) */
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

/* function ataqueFuego() {
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
} */
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio ==4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
    
}

function iniciarPelea () {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate () {
    clearInterval(intervalo)
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            /* victoriasJugador++
            spanVidasEnemigo.innerHTML = victoriasJugador */
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponente(index, index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas();
        
}

    /* if(ataqueEnemigo == ataqueJugador) {
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
       
    } */
    

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)");
    } else {
        crearMensajeFinal('Lo siento, perdiste :(');
    }
}
function crearMensaje(resultado) {
    

    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    /* sectionMensajes.appendChild(notificacion) */
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    /* let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + resultado */

}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

/*     botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true */

    
    sectionReiniciar.style.display = "block"
    //boton fuego detenerse
/*     let botonnoneF = document.getElementById("boton-fuego")
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
    botonnoneT.style.color = "white" */




}


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas () {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    
    mokeponesEnemigos.forEach(function(mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x, y){
    fetch(`http://127.0.0.1:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok) {
            res.json().then(function({enemigos}){
                console.log(enemigos)
                mokeponesEnemigos = enemigos.map(function(enemigo) {
                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if (mokeponNombre === "Hipodoge") {
                        mokeponEnemigo = new Mokepon("Hipodoge", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png", enemigo.id)
                    } else if (mokeponNombre === "Capipepo") {
                        mokeponEnemigo = new Mokepon("Capipepo", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png", enemigo.id)
                    } else if (mokeponNombre === "Ratigueya") {
                        mokeponEnemigo = new Mokepon("Ratigueya", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png", enemigo.id)
                    } else if (mokeponNombre === "Langostelvis") {
                        mokeponEnemigo = new Mokepon("Langostelvis", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png", enemigo.id)
                    } else if (mokeponNombre === "Tucapalma") {
                        mokeponEnemigo = new Mokepon("Tucapalma", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png", enemigo.id)
                    } else if (mokeponNombre === "Pydos") {
                        mokeponEnemigo = new Mokepon("Pydos", "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png", 5, "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png", enemigo.id)
                    }

                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y
                    
                    return mokeponEnemigo
                })
            })
        }
    })
}

function moverDerecha () {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda () {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo () {
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba () {
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function presionarTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        default:
            break;
    }
}
function iniciarMapa(){

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", presionarTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("colision");

    enemigoId = enemigo.id
    /* alert("Hay colision" +enemigo.nombre) */
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)
