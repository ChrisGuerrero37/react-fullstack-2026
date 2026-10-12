import { productos } from "./productos.js";
import {
  agregarAlCarrito,
  cambiarCantidad,
  eliminarDelCarrito,
  calcularResumen,
} from "./carrito.js";

const camiseta = productos.find((p) => p.id === 1);
const audifonos = productos.find((p) => p.id === 5);
const lentes = productos.find((p) => p.id === 11);

let carrito = [];
carrito = agregarAlCarrito(carrito, camiseta, 2);
carrito = agregarAlCarrito(carrito, audifonos);
carrito = agregarAlCarrito(carrito, camiseta);
carrito = agregarAlCarrito(carrito, lentes, 3);
console.log("A:", carrito);
console.log("B:", calcularResumen(carrito));

const antes = carrito;
carrito = cambiarCantidad(carrito, 5, 2);
console.log("C:", calcularResumen(carrito));
console.log(
  "D: ¿se modificó el anterior?",
  antes.find((i) => i.id === 5).cantidad !== 1,
);

carrito = eliminarDelCarrito(carrito, 11);
console.log("E:", calcularResumen(carrito));

carrito = cambiarCantidad(carrito, 1, 0);
carrito = cambiarCantidad(carrito, 5, 0);
console.log("F:", carrito, calcularResumen(carrito));
