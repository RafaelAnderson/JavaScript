const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd'); // Agrega
const products2 = products.concat('sony tv'); // Genera nueva instancia

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const mercado = [...fruits, ...products, 'lechuga'];

const mercado2 = products2.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products);
console.log(products2);
console.log(mercado);
console.log(mercado2);