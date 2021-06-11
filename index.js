const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ultimoNivel = 10;


//la clase juego tendrá toda la logica del juego
class Game {
    constructor(){
        this.iniciar = this.iniciar().bind(this)
        this.iniciar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 1000)
    }

    iniciar(){
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this);
        //toggle es un switch de predido y apagado, es como si fuera un botón
        // this.toggleBtnEmpezar()
        btnEmpezar.classList.add('hide')
        this.level = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    // toggleBtnEmpezar(){
    //     if (btnEmpezar.classList.contains('hide')){
    //         btnEmpezar.classList.remove('hide')
    //     } else {
    //         btnEmpezar.classList.add('hide')
    //     }
    // }

    generarSecuencia(){
        this.secuencia = new Array(ultimoNivel).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
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

    colorToNumber(color){
        switch (color) {
            case "violeta":
                return 0
            case "celeste":
                return 1
            case "verde":
                return 2
            case "naranja":
                return 3
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
        setTimeout(() => this.turnOffColor(color), 500)
    }

    turnOffColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick(){
        //en este caso el this apunta al botón cuando debemos hacer que apunte al juego por eso se modifica el contexto al cual hace referencia "this"
        var _this = this
        this.colores.celeste.addEventListener("click", this.elegirColor);
        this.colores.violeta.addEventListener("click", this.elegirColor)
        this.colores.verde.addEventListener("click", this.elegirColor)
        this.colores.naranja.addEventListener("click", this.elegirColor)
    }

    eliminarEventosCLick(){
        var _this = this
        this.colores.celeste.removeEventListener("click", this.elegirColor);
        this.colores.violeta.removeEventListener("click", this.elegirColor)
        this.colores.verde.removeEventListener("click", this.elegirColor)
        this.colores.naranja.removeEventListener("click", this.elegirColor)
    }

    elegirColor(ev){
        let nombreColor = ev.target.dataset.color;
        let numeroColor = this.colorToNumber(nombreColor);
        this.lightColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.level) {
                this.level++
                this.eliminarEventosCLick();
                if (this.level === (ultimoNivel + 1)){
                    this.gano();
                }else {
                    setTimeout(this.siguienteNivel, 1500);
                } 
            }
        }else {
            this.perdio()
        }
    }

    gano(){
       swal("You Win!!!")
        .then(this.iniciar)
    }

    perdio(){
        swal("You Lose!!!")
        .then(() => {
            this.eliminarEventosCLick();
            this.iniciar();
    })
}

function empezar() {
    window.juego = new Juego()
}