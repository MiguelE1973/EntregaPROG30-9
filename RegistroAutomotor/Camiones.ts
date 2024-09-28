export class Camion {
    private placa:string;
    private marca: string;
    private modelo: string;
    private año:number;
    private carga:number;

    constructor(placa:string,marca: string, modelo: string,año:number,carga:number) {
        this.placa=placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año=año;
        this.carga=carga;
    }
    //metodos get que devuelve el atributo solicitado de camiones 
    getPlaca():string{
        return this.placa;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string{
        return this.modelo;
    }
    getAño(): number {
        return this.año;
    }
    getCarga(): number {
        return this.carga;
    }
    //metodo set para modificar patente de un camion
    setPlaca(nombre:string) {
        this.placa=nombre
    }
}    