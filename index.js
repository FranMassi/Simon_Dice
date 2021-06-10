const violeta = document.getElementById("violeta");
const celeste = document.getElementById("celeste");
const verde = document.getElementById("verde");
const naranja = document.getElementById("naranja");
const btnEmpezar = document.getElementById("btnEmpezar");

//la clase juego tendrá toda la logica del juego
class Game {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar(){
        btnEmpezar.classList.add('hide');
        this.level = 1;
        this.colores = {
            violeta,
            celeste,
            verde,
            naranja
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.iluminarSecuencia
    }

    iluminarSecuencia(){

    }
}

function empezarJuego (){
    window.game = new Game();
}

