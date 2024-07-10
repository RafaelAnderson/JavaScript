import { invoices } from "./data/invoices";

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

const invoiceByClientName = invoices.some(i => i.client.name === 'Pepe');
console.log(invoiceByClientName);