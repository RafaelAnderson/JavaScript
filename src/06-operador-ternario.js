const average = 5.9;

let statusAverage = (average >= 5.5) ? 'Aprobado' : 'Rechazado';

console.log(`Resultado: ${statusAverage}`);

if (average >= 5.5) {
  statusAverage = 'Aprobado ...';
} else {
  statusAverage = "Rechazado ...";
}

console.log(`Resultado: ${statusAverage}`);

let max = 0;
const a = 5;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`Resultado: ${max}`);