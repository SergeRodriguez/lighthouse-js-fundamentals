

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}


function buildTriangle(length) {
  for (let i = 1; i <= length; i++) {
    console.log(makeLine(i));
  }
}


// test your code by uncommenting the following line
buildTriangle(3);