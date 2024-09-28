"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(placa, marca, modelo, año, cilindrada) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cilindrada = cilindrada;
    }
    //metodos get 
    Moto.prototype.getPlaca = function () {
        return this.placa;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getAño = function () {
        return this.año;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    //metodo set para modificar patente de una moto
    Moto.prototype.setPlaca = function (nombre) {
        this.placa = nombre;
    };
    return Moto;
}());
exports.Moto = Moto;
