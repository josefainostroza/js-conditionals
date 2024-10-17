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

function largerNumber(numberA, numberB, numberC){
  if (numberA>numberB && numberA>numberC) {
    console.log(numberA+' es mayor que '+numberB+' y '+numberC);
}
if(numberB>numberA && numberB>numberC){
  console.log(numberB+' es mayor que '+numberA+' y '+numberC);
}
if(numberC>numberA && numberC>numberB){
  console.log(numberC+' es mayor que '+numberA+' y '+numberB);
}
}
largerNumber(3,5,22)

function divisibleNumber(number){
if(number%5 === 0 && number%3 === 0){
  console.log(number+' Es divisible por 3 y 5');
}
else if(number%5 ===0){
  console.log(number+' Es divisible por 5');
}
else if(number%3 === 0){
  console.log(number+' Es divisible por 3');
}
else{
  console.log('number');
}
}
divisibleNumber(12)

function evenOddNumber(number){
  if(number%2 ===0){
    console.log(number+' Es un número par');
  }
  else{
    console.log(number+' Es un número impar');
  }
}
evenOddNumber(12)

function leapYear(number){
  if(number%4 ===0 || number%400===0){
    console.log(number+' Es un año bisiesto');
  }
else{
  console.log(number+' No es un año bisiesto');

}
}
leapYear(2026)