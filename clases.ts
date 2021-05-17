class Persona {
    private nombre: string;
    private apellido: string;
    private direccion: any;

    public constructor(nombre: string, apellido: string, direccion: any) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.direccion = direccion;
    }

    public getPersona(): string {
        return this.nombre + " " + this.apellido;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getDireccion():any {
        return this.direccion;
    }
}

class Direccion {
    public constructor(private calle: string, private altura: number) { };

    public getCalle(): string {
        return this.calle;
    }

    public getAltura(): number {
        return this.altura;
    }
}


class Cliente extends Persona {

    private id: number;
    constructor(nombre: string, apellido: string, identificador: number, direccion?: any)  {
        super(nombre, apellido, direccion);
        this.id = identificador;
    }

    public getCliente(): number {

        return this.id;
    }

    public verAutomovil(elAuto: Automovil): any {

        return {
            marca: elAuto.getMarca(),
            modelo: elAuto.getModelo()
        }
    }
}

class Automovil {


    public constructor(private marca: string, private modelo: string) {

    }

    public getAutomovil(): string {
        return this.marca + " " + this.modelo;
    }

    public getMarca(): string {
        return this.marca
    }

    public getModelo(): string {
        return this.modelo;
    }

}

export {Persona,Direccion,Cliente,Automovil};