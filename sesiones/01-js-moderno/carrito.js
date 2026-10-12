const redondear = (n) => Math.round(n * 100) / 100;

//Agregar producto al carrito
export const agregarAlCarrito = (carrito, producto, cantidad = 1) => {
  const existe = carrito.find((item) => item.id === producto.id);

  if (existe) {
    return carrito.map((item) =>
      item.id === producto.id
        ? { ...item, cantidad: item.cantidad + cantidad }
        : item,
    );
  }
  return [
    ...carrito,
    {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad,
    },
  ];
};

//Cambiar la cantidad de un producto
export const cambiarCantidad = (carrito, id, cantidad) => {
  if (cantidad <= 0) {
    return eliminarDelCarrito(carrito, id);
  }
  return carrito.map((item) => (item.id === id ? { ...item, cantidad } : item));
};

//Eliminar un producto por id
export const eliminarDelCarrito = (carrito, id) => {
  return carrito.filter((item) => item.id !== id);
};

//Calcular el resumen de la compra
export const calcularResumen = (carrito) => {
  const cantidadArticulos = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0,
  );
  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  const subtotalRedondeado = redondear(subtotal);
  const iva = redondear(subtotalRedondeado * 0.13);
  const total = redondear(subtotalRedondeado + iva);

  return {
    cantidadArticulos,
    subtotal: subtotalRedondeado,
    iva,
    total,
  };
};
