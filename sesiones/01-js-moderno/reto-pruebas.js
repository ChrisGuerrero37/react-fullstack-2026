import {
  fullName,
  priceWithTax,
  greet,
  getCoords,
  productLabel,
  mergeSettings,
  sumAll,
  copyList,
  addItem,
  describeRoom,
} from "./reto-moderno.js";
console.log(
  "1. fullName:",
  fullName({ firstName: "Mario", lastName: "González" }),
);

console.log("2. priceWithTax:", priceWithTax(100));

console.log("3. greet (default):", greet());
console.log("3. greet (con nombre):", greet("Carlos"));

console.log("4. getCoords:", getCoords([10, 25]));

console.log(
  "5. productLabel:",
  productLabel({ name: "Laptop", price: 799.99 }),
);

const configDefecto = { tema: "oscuro", notificaciones: true };
const configUsuario = { notificaciones: false };
console.log("6. mergeSettings:", mergeSettings(configDefecto, configUsuario));
console.log("7. sumAll:", sumAll(5, 10, 15, 20));

const listaOriginal = ["Manzana", "Pera"];
const listaCopia = copyList(listaOriginal);
console.log(
  "8. copyList:",
  listaCopia,
  "Es copia independiente?:",
  listaCopia !== listaOriginal,
);

console.log("9. addItem:", addItem(listaOriginal, "Uva"));

const habitacion = { number: 402, type: "Suite", floor: 4 };
console.log("10. describeRoom:", describeRoom(habitacion));
