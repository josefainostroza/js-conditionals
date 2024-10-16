function nameAndAge(name, age) {
  if (age >= 18) {
    console.log('Hola ' + name + ', eres mayor de edad');
  } else {
    console.log('Hola' + name + ', eres menor de edad');
  }
}
nameAndAge('Josefa', 23);

function number(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA + ' es mayor que ' + numberB);
  } else {
    console.log(numberA + ' es menor que ' + numberB);
  }
}
number(12, 20);

function print(numberA) {
  if (numberA < 0) {
    console.log(numberA + ' es menor que 0');
  } else if (numberA > 0) {
    console.log(numberA + ' es mayor que 0');
  } else {
    console.log(numberA + 'es igual a 0');
  }
}
print(-3);

function calification(numberA, numberB, numberC) {
  const media = (numberA + numberB + numberC) / 3;
  console.log(media);
  if (media > 0 && media < 5) {
    console.log('Suspenso');
  } else if (media > 5 && media < 8) {
    console.log('Aprobado');
  } else if (media >= 8) {
    console.log('Matricula de honor');
  }
}
calification(10, 8, 10);
