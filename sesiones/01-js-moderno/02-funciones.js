// Función tradicional
function sumarTradicional(a, b) {
  return a + b;
}
// Arrow function con cuerpo
const sumar = (a, b) => {
  return a + b;
};
// Arrow function con retorno implícito (una sola expresión)
const multiplicar = (a, b) => a * b;
// Parámetro con valor por defecto + template literal
const saludar = (nombre = "invitado") =>
  `Hola, ${nombre}. Bienvenido a la tienda.`;

console.log(sumarTradicional(2, 3));
console.log(sumar(2, 3));
console.log(multiplicar(4, 5));
console.log(saludar("Ana"));
console.log(saludar());
console.log(`El total es $${(25.5 * 2).toFixed(2)}`);
