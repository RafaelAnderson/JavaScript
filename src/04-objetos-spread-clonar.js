const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },
  items: [
    {
      producto: "keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

// Una variable es un contenedor

const invoice2 = invoice; // La referencia se guarda en invoice2
const invoice3 = { ...invoice }; // Operador spread

const result = invoice == invoice2; // Evaluar contenido
const result2 = invoice == invoice3; // Evaluar contenido

if (result) {
  console.log(result)
}
else {
  console.log('no son iguales')
}

if (result2) {
  console.log(result2)
}
else {
  console.log('no son iguales')
}


invoice2.id = 20;
invoice3.id = 40;

console.log(invoice.id);
console.log(invoice2.id);
console.log(invoice3.id);