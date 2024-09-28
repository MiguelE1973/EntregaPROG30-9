"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(placa, marca, modelo, año, carga) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.carga = carga;
    }
    Camion.prototype.getPlaca = function () {
        return this.placa;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getAño = function () {
        return this.año;
    };
    Camion.prototype.getCarga = function () {
        return this.carga;
    };
    return Camion;
}());
exports.Camion = Camion;
