import { Moto } from "./Motos";
import { Auto } from "./Autos";
import { Camion} from "./Camiones";
import { Registro} from "./Registros";

// Crear motos
const moto1 = new Moto("VBG 111","Yamaha", "Mediana",2008,250);
const moto2 = new Moto("HHG 222","Honda","Grande", 2011,125);
const moto3 = new Moto("MNV 333","Harley Davinson","Grande", 2009,1350);

// Crear camiones
const camion1 = new Camion("SDR 121","Mercedes Benz", "Grande",2008,12000);
const camion2 = new Camion("NNN 675","Volvo","Mediano", 2014,8500);
const camion3 = new Camion("DSA 345","Iveco","Grande", 2016,9000);

// Crear autos
const auto1 = new Auto("MVS 808","Renault","Clio",2013,5);
const auto2 = new Auto("BSA 232","Ford ","Fiesta",2008,5);
const auto3 = new Auto("UHG 666","Fiat ","Spazio",1998,3);


// Crear registro
const registro1 = new Registro("Registro N1");

// Agregar los vehículos al registro 

registro1.agregarMoto(moto1);
registro1.agregarAuto(auto1);
registro1.agregarCamion(camion1);

registro1.agregarMoto(moto2);
registro1.agregarAuto(auto2);
registro1.agregarCamion(camion2);

registro1.agregarMoto(moto3);
registro1.agregarAuto(auto3);
registro1.agregarCamion(camion3);

//Ver lista de Vehículos del registro del Automotor

console.log("Motos:")
console.log("Patente: ",registro1.obtenerMotos().map(motos => motos.getPlaca()));
console.log("Marca ",registro1.obtenerMotos().map(motos => motos.getMarca()));
console.log("Modelo: ",registro1.obtenerMotos().map(motos => motos.getModelo()));
console.log("Camiones")
console.log("Pantente: ",registro1.obtenerCamiones().map(camiones => camiones.getPlaca()));
console.log("Marca: ",registro1.obtenerCamiones().map(camiones => camiones.getMarca()));
console.log("Modelo:",registro1.obtenerCamiones().map(camiones => camiones.getModelo()));
console.log("Autos: ")
console.log("Pantente: ",registro1.obtenerAutos().map(motos => motos.getPlaca()));
console.log("Marca: ",registro1.obtenerAutos().map(motos => motos.getMarca()));
console.log("Modelo: ",registro1.obtenerAutos().map(motos => motos.getModelo()));



// Modificar patente de una moto 
moto1.setPlaca("GFD 222");

// Modificar patente de un camion 
camion1.setPlaca("GFD 555");

// Modificar patente de un auto
auto1.setPlaca("GFD 888");

// Eliminar una moto del registro buscandolo por patente
registro1.eliminarMoto("MNV 333");
// Eliminar un camion del registro buscandolo por patente
registro1.eliminarCamion("SDR 121");
// Eliminar un auto del registro buscandolo por patente
registro1.eliminarAuto("BSA 232");
console.log("------------------------------------------------------------------")
// Comrobar si se eliminó la moto
console.log("Motos:")
console.log("Patente: ",registro1.obtenerMotos().map(motos => motos.getPlaca()));
console.log("Marca ",registro1.obtenerMotos().map(motos => motos.getMarca()));
console.log("Modelo: ",registro1.obtenerMotos().map(motos => motos.getModelo()));

// Comrobar si se eliminó la moto
console.log("Camiones:")
console.log("Patente: ",registro1.obtenerCamiones().map(camiones => camiones.getPlaca()));
console.log("Marca ",registro1.obtenerCamiones().map(camiones => camiones.getMarca()));
console.log("Modelo: ",registro1.obtenerCamiones().map(camiones => camiones.getModelo()));

// Comrobar si se eliminó la moto
console.log("AUtos:")
console.log("Patente: ",registro1.obtenerAutos().map(autos => autos.getPlaca()));
console.log("Marca ",registro1.obtenerAutos().map(autos => autos.getMarca()));
console.log("Modelo: ",registro1.obtenerAutos().map(autos => autos.getModelo()));

// Calcula el porcentaje de autos que son anteriores al año 2000 segun año del vehículo
let Porcentaje:number;
Porcentaje=registro1.calcularPorcentaje();
console.log("Porcentaje de Autos anteriores al año 2000",Porcentaje," %")
