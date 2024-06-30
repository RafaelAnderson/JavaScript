const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products);

products.forEach(function (el) {
    console.log(el);
});

products.forEach(el => {
    console.log(el);
});

for (const prod of products) {
    console.log(prod);
}