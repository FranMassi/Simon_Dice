const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

//la clase juego tendrá toda la logica del juego
class Game {
    constructor(){
        this.iniciar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    iniciar(){
        btnEmpezar.classList.add('hide');
        this.level = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    numberToColor(numero){
        switch (numero) {
            case 0:
                return "violeta"
            case 1:
                return "celeste"
            case 2:
                return "verde"
            case 3:
                return "naranja"
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.level; i++){
            let color = this.numberToColor(this.secuencia[i]);
            setTimeout(() => this.lightColor(color), 1000 * i);
        }
    }

    lightColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.turnOffColor(color), 1000)
    }

    turnOffColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick(){
        //en este caso el this apunta al botón cuando debemos hacer que apunte al juego por eso se modifica el contexto al cual hace referencia "this"
        var _this = this
        this.colores.celeste.addEventListener("click", this.elegirColor.bind(_this));
        this.colores.violeta.addEventListener("click", this.elegirColor.bind(_this))
        this.colores.verde.addEventListener("click", this.elegirColor.bind(_this))
        this.colores.naranja.addEventListener("click", this.elegirColor.bind(_this))
    }

    elegirColor(ev){
        console.log(ev)
    }
}

function empezarJuego (){
    window.game = new Game();
}

