//1
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25
console.log(jedi.edad);

//2
const nombre = "Leia"

const apellido = "Organa"

const edad = 20
console.log("Soy "+ nombre + " " + apellido + ", tengo "+edad+ " años y soy una princesa de Alderaan.");

//3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioTotal = sable1.precio + sable2.precio
console.log(precioTotal);

//4
let precioBaseGlobal = 10000;

precioBaseGlobal = 10500
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase
nave2.precioFinal = precioBaseGlobal + nave2.precioBase