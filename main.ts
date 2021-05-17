/* class Persona {
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
*/

import principal, {Persona,Direccion,Cliente,Automovil} from "./clases";

import * as texto from './clases';




let direccionSebastian = new Direccion("Melo", 141);
let direccionPedro = new Direccion("Belgrano", 590);
let direccionClienteJuan = new Direccion("Sarmiento",640);

let sebastian = new Persona("Sebastian", "Levi", direccionSebastian);
let pedro = new Persona("Pedro", "Ramos", direccionPedro);


let clienteJuan = new Cliente("Juan", "Ramirez",45556,direccionClienteJuan);// en este caso direccion puede se vacio - ver def de clase-

let honda = new Automovil("Honda", "Accord");

clienteJuan.verAutomovil(honda);

console.log(sebastian.getPersona()," y vive en ",sebastian.getDireccion().calle," al ",sebastian.getDireccion().altura);
console.log(pedro.getPersona()," y vive en la calle ",pedro.getDireccion().calle," altura ",pedro.getDireccion().altura);

console.log("El cliente ", clienteJuan.getPersona(),"con un ID: ",clienteJuan.getCliente(), ", usa un ", clienteJuan.verAutomovil(honda).marca, " modelo ", clienteJuan.verAutomovil(honda).modelo, ".-");
console.log("y vive en ",clienteJuan.getDireccion().calle," al ",clienteJuan.getDireccion().altura);



//***************************************************** */

console.log("Persona: ", clienteJuan.getPersona());

console.log(principal()); // principal se la llama directamente. Es como un static desde el modulo . con default

console.log(texto.PI); // importado como texto