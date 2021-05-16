var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Persona.prototype.getPersona = function () {
        return this.nombre + " " + this.apellido;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Persona;
}());
var Direccion = /** @class */ (function () {
    function Direccion(calle, altura) {
        this.calle = calle;
        this.altura = altura;
    }
    ;
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getAltura = function () {
        return this.altura;
    };
    return Direccion;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, apellido, identificador, direccion) {
        var _this = _super.call(this, nombre, apellido, direccion) || this;
        _this.id = identificador;
        return _this;
    }
    Cliente.prototype.getCliente = function () {
        return this.id;
    };
    Cliente.prototype.verAutomovil = function (elAuto) {
        return {
            marca: elAuto.getMarca(),
            modelo: elAuto.getModelo()
        };
    };
    return Cliente;
}(Persona));
var Automovil = /** @class */ (function () {
    function Automovil(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Automovil.prototype.getAutomovil = function () {
        return this.marca + " " + this.modelo;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    return Automovil;
}());
var direccionSebastian = new Direccion("Melo", 141);
var direccionPedro = new Direccion("Belgrano", 590);
var direccionClienteJuan = new Direccion("Sarmiento", 640);
var sebastian = new Persona("Sebastian", "Levi", direccionSebastian);
var pedro = new Persona("Pedro", "Ramos", direccionPedro);
var clienteJuan = new Cliente("Juan", "Ramirez", 45556, direccionClienteJuan); // en este caso direccion puede se vacio - ver def de clase-
var honda = new Automovil("Honda", "Accord");
clienteJuan.verAutomovil(honda);
console.log(sebastian.getPersona(), " y vive en ", sebastian.getDireccion().calle, " al ", sebastian.getDireccion().altura);
console.log(pedro.getPersona(), " y vive en la calle ", pedro.getDireccion().calle, " altura ", pedro.getDireccion().altura);
console.log("El cliente ", clienteJuan.getPersona(), "con un ID: ", clienteJuan.getCliente(), ", usa un ", clienteJuan.verAutomovil(honda).marca, " modelo ", clienteJuan.verAutomovil(honda).modelo, ".-");
console.log("y vive en ", clienteJuan.getDireccion().calle, " al ", clienteJuan.getDireccion().altura);
//***************************************************** */
console.log("Persona: ", clienteJuan.getPersona());
