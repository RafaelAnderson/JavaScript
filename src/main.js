const invoices = [
    {
        id: 1,
        name: "Compras de oficina",
        client: {
            name: "Jhon",
            lastName: "Doe",
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
        ]
    },
    {
        id: 2,
        name: "Compras de computación",
        client: {
            name: "Maria",
            lastName: "Doe",
        },
        items: [
            {
                producto: "keyboard",
                price: 399,
                quantity: 2,
            },
            {
                producto: "screen 17",
                price: 800,
                quantity: 1,
            },
            {
                producto: "cpu intel",
                price: 1000,
                quantity: 10,
            },
        ]
    },
    {
        id: 3,
        name: "Compras de papelería",
        client: {
            name: "Pepe",
            lastName: "Doe",
        },
        items: [
            {
                producto: "pencil",
                price: 50,
                quantity: 1,
            },
            {
                producto: "paper",
                price: 100,
                quantity: 10,
            },
        ]
    }
];

const invoicesName = invoices.map(i => {
    return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => {
    return i.client.name;
});

console.log(invoicesClient);

const invoice = invoices.find(i => i.id === 3);
console.log(invoice);

const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

const invoiceDeleted = invoices.filter(i => i.id != 2); // != por valor, !== por tipo y valor
console.log(invoiceDeleted);

const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result);