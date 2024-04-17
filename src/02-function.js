function sayHello(name = "Anderson", age = 0) {
  const greeting = `Hola Mundo Function! ${name} edad ${age}`;
  //console.log("Hola Mundo Function");
  return greeting;
}

const sayHello1 = function (name = "Anderson", age = 0) {
  const greeting = `Hola Mundo Function! ${name} edad ${age}`;
  //console.log("Hola Mundo Function");
  return greeting;
};

const sayHello2 = (name = "Anderson", age = 0) => {
  return `Hola Mundo Function! ${name} edad ${age}`;
};

const sayHello3 = (name = "Anderson", age = 0) =>
  `Hola Mundo Function! ${name} edad ${age}`;

const add = (a = 0, b = 0) => a + b;

const result = sayHello("Rafael", 27);
console.log(result);

const result1 = sayHello2("Rafael", 27);
console.log(result1);

const result2 = sayHello3("Rafael", 27);
console.log(result2);

const result3 = add(10, 5);
console.log(result3);
