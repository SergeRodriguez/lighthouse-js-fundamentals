function laugh(num) {
  let joker = "";
  while (num > 0) {
    joker += "ha";
    num--;
  }
  return (joker + "!");
}

console.log(laugh(10));

function laugh2(num) {
  let joker = "";
  for (i = num; i > 0; i--) {
    joker += "ha";
  }
  return (joker + "!");
}

console.log(laugh2(10));