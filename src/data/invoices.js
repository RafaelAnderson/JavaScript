const paper = {
    producto: 'paper',
    price: 100,
    quantity: 10
}

export const invoices = [
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
            paper
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

export default (clientName) => {
    return invoices.find(i => i.client.name === clientName)
}