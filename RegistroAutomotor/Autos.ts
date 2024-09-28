export class Auto {
    private placa:string
    private marca: string;
    private modelo: string;
    private año:number;
    private puertas:number;

    constructor(placa:string,marca: string, modelo: string,año:number,puertas:number) {
        this.placa=placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año=año;
        this.puertas=puertas;
    }
    //metodos get que devuelve el atributo solicitado de autos
    getPlaca():string{
        return this.placa;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getAño(): number {
        return this.año;
    }
    getPuertas(): number {
        return this.puertas;
    }   
    //metodo set para modificar patente de un auto
    setPlaca(nombre:string) {
        this.placa=nombre
    } 
}    