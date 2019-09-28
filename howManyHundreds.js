function howManyHundreds(num) {
  let remainder = num % 100;
  let hundreds = num - remainder;
  return hundreds / 100
}


console.log(howManyHundreds(1000)); // should return 10
console.log(howManyHundreds(9934)); // should return 99