export class Moto {
    placa:string;
    private marca: string;
    private modelo: string;
    private año:number;
    cilindrada:number;

    constructor(placa:string,marca: string, modelo: string,año:number,cilindrada:number) {
        this.placa=placa;
        this.marca = marca;
        this.modelo = modelo;
        this.año=año;
        this.cilindrada=cilindrada;
    }
    //metodos get que devuelve el atributo solicitado de motos
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
    getCilindrada(): number {
        return this.cilindrada;
    }
    //metodo set para modificar patente de una moto
    setPlaca(nombre:string) {
        this.placa=nombre
    }
}  




 