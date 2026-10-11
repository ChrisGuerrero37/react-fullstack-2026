const habitacion = { numero: 204, tipo: "Doble", piso: 2, tarifa: 65 };
// Destructuring de objetos
const { numero, tipo } = habitacion;
console.log(numero, tipo);

// Renombrar y valor por defecto
const { tarifa: precioNoche, vista = "Jardín" } = habitacion;
console.log(precioNoche, vista);
// Destructuring de arrays
const coordenadas = [13.69, -89.19];
const [latitud, longitud] = coordenadas;
console.log(`Lat: ${latitud}, Lng: ${longitud}`);
// Destructuring en los parámetros (así se leen las props en React)
const describir = ({ numero, tipo, piso }) =>
  `Habitación ${numero} (${tipo}), piso ${piso}`;
console.log(describir(habitacion));
