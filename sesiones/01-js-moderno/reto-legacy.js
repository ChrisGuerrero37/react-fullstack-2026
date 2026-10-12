var TAX = 0.13;
function fullName(user) {
  return user.firstName + " " + user.lastName;
}
function priceWithTax(price) {
  return price + price * TAX;
}
function greet(name) {
  if (name === undefined) {
    name = "invitado";
  }
  return "Hola, " + name + "!";
}
function getCoords(point) {
  var x = point[0];
  var y = point[1];
  return "x: " + x + ", y: " + y;
}
function productLabel(product) {
  var name = product.name;
  var price = product.price;
  return name + " - $" + price.toFixed(2);
}
function mergeSettings(defaults, custom) {
  return Object.assign({}, defaults, custom);
}
function sumAll() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
function copyList(list) {
  return list.slice();
}
function addItem(list, item) {
  var copy = list.slice();
  copy.push(item);
  return copy;
}
function describeRoom(room) {
  return (
    "Habitación " + room.number + " (" + room.type + "), piso " + room.floor
  );
}
