function 반복문() {
  for (let i = 0; i < 11; i++) {
    if (i == 8) {
      continue;
    }
    console.log(i);
  }
}

반복문();

function 더하기(a, b) {
  return a + b;
}
function 빼기(a, b) {
  return a - b;
}

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unkown command");
  }
}

console.log(calculate("add", 3, 5)); //8
