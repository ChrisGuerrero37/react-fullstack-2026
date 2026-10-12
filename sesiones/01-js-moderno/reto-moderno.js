const TAX = 0.13;

export const fullName = (user) => `${user.firstName} ${user.lastName}`;

export const priceWithTax = (price) => price + price * TAX;

export const greet = (name = "invitado") => `Hola, ${name}!`;

export const getCoords = (point) => {
  const [x, y] = point;
  return `x: ${x}, y: ${y}`;
};

export const productLabel = (product) => {
  const { name, price } = product;
  return `${name} - $${price.toFixed(2)}`;
};

export const mergeSettings = (defaults, custom) => ({ ...defaults, ...custom });

export const sumAll = (...numbers) =>
  numbers.reduce((total, num) => total + num, 0);

export const copyList = (list) => [...list];

export const addItem = (list, item) => [...list, item];

export const describeRoom = ({ number, type, floor }) =>
  `Habitación ${number} (${type}), piso ${floor}`;
