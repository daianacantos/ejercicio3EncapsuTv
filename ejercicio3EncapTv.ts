var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramCanal, paramModelo, paramMarca, paramPulgadas) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.pulgadas = paramPulgadas;
    }
    ;
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Televisor.prototype.obtenerVolumen = function () {
    };
    ;
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    ;
    return Televisor;
}());
var primerTelevisor = new Televisor(true, 42, 50, "12356", "apple", 42);
var segundoTelevisor = new Televisor(false, 24, 78, "UH1233", "philco", 22);