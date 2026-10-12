const BASE_URL = "https://dummyjson.com";

// Todas las peticiones pasan por aquí
const peticion = async (ruta) => {
  const respuesta = await fetch(`${BASE_URL}${ruta}`, {
    signal: AbortSignal.timeout(8000), // cancela si tarda más de 8 segundos
  });
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}`);
  }
  return respuesta.json();
};

export const obtenerProductos = async ({ limite = 12, salto = 0 } = {}) => {
  const datos = await peticion(`/products?limit=${limite}&skip=${salto}`);
  return { productos: datos.products, total: datos.total };
};

export const obtenerProducto = (id) => peticion(`/products/${id}`);

export const buscarProductos = async (texto) => {
  const datos = await peticion(
    `/products/search?q=${encodeURIComponent(texto)}`,
  );
  return datos.products;
};

export const obtenerCategorias = () => peticion("/products/category-list");

export const resumirCategorias = async (listaCategorias) => {
  //Peticiones en paralelo a /products/category/NOMBRE
  const promesas = listaCategorias.map((cat) =>
    peticion(`/products/category/${cat}`),
  );

  //Espera a que todas las peticiones terminen al mismo tiempo
  const resultados = await Promise.all(promesas);

  //Procesa los datos devueltos
  return resultados.map((datos, index) => {
    const prods = datos.products;
    const cantidad = prods.length;

    // Sumar todos los precios
    const sumaPrecios = prods.reduce((acc, p) => acc + p.price, 0);

    // Calcular promedio (redondeado a 2 decimales)
    const precioPromedio =
      cantidad > 0 ? Math.round((sumaPrecios / cantidad) * 100) / 100 : 0;

    return {
      categoria: listaCategorias[index],
      cantidad,
      precioPromedio,
    };
  });
};
