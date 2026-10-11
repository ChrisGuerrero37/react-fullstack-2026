export const IVA = 0.13;
export const formatearPrecio = (valor) => `$${valor.toFixed(2)}`;

export const calcularConIva = (precio) => precio * (1 + IVA);
const saludo = (nombre) => `Hola, ${nombre}`;

export default saludo;
