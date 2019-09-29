
//range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
//range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
//range(-5, 2, 3);	[ -5, -2, 1 ]

function range(start, end, step) {
  let array = [];
  if (step <= 0 || start > end || (end || step) === undefined) {
    return array;
  } else {
    array[0] = start;
    for (let i = 1; i <= (end - start) / step; i++) {
      array[i] = array[i - 1] + step;
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(2,3));

