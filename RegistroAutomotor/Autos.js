"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(placa, marca, modelo, año, puertas) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.puertas = puertas;
    }
    Auto.prototype.getPlaca = function () {
        return this.placa;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    return Auto;
}());
exports.Auto = Auto;
