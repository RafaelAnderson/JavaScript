const users = ['pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa'];

const [pepe, b, maria, , , carlos, ...rest] = users;

console.log(pepe, b, maria, carlos, rest);
console.log(pepe, b, maria, carlos, ...rest);