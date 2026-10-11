// Spread en arrays: copiar y agregar sin modificar el original
const carrito = ["Camiseta", "Gorra"];
const carritoNuevo = [...carrito, "Zapatos"];
console.log(carrito);
// el original no cambia
console.log(carritoNuevo);
// Spread en objetos: copiar y sobrescribir propiedades
const producto = { id: 1, nombre: "Gorra", precio: 8 };
const productoEnOferta = { ...producto, precio: 6 };
console.log(producto.precio, productoEnOferta.precio);
// Rest: recibir cualquier cantidad de argumentos
const sumarTodo = (...numeros) => numeros.reduce((total, n) => total + n, 0);
console.log(sumarTodo(5, 10, 15, 20));
// Rest en destructuring: separar una propiedad del resto
const { id, ...datosSinId } = producto;
console.log(datosSinId);
