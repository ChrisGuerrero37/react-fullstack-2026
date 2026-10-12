import {
  obtenerProductos,
  obtenerProducto,
  buscarProductos,
  obtenerCategorias,
} from "./api.js";

const { productos, total } = await obtenerProductos({ limite: 3 });
console.log(
  `Página 1 (${productos.length} de ${total}):`,
  productos.map((p) => p.title),
);

const [uno, categorias] = await Promise.all([
  obtenerProducto(1),
  obtenerCategorias(),
]);
console.log("Producto 1:", uno.title, "| Categorías:", categorias.length);

const telefonos = await buscarProductos("phone");
console.log(`Búsqueda "phone": ${telefonos.length} resultados`);

try {
  await obtenerProducto(999999);
} catch (error) {
  console.log("Error controlado:", error.message);
}
import { resumirCategorias } from "./api.js";

//Definimos un grupo de categorías de DummyJSON
const categoriasAMedir = ["smartphones", "laptops", "fragrances"];

//Llamamos a la función asíncrona
const resumen = await resumirCategorias(categoriasAMedir);

//Mostramos la tabla formateada en la consola
console.table(resumen);
