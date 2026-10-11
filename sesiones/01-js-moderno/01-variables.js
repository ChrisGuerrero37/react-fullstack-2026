const IVA = 0.13; // no cambia: const
let cantidad = 1; // cambiará: let

cantidad = cantidad + 2;
const producto = { nombre: "Camiseta", precio: 12.5 };
producto.precio = 10;
// se puede modificar una propiedad... // producto = {};          // ...pero no reasignar la variable (daría error)
console.log("Cantidad:", cantidad);
console.log("Precio con IVA:", producto.precio * (1 + IVA)).toFixed(2);
