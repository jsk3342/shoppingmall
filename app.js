// function 반복문() {
//   for (let i = 0; i < 11; i++) {
//     if (i == 8) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// 반복문();

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

// console.log(calculate("add", 3, 5)); //8

var 함수 = () => {};

함수();

[1, 2, 3, 4].forEach(a => console.log(a));

var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${사람.name}`);
  },
};

사람.sayHi();

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
  var 합 = 0;
  this.data.forEach(function (a) {
    합 = 합 + a;
  });
  console.log(합);
};

자료.전부더하기();

document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(function () {
    console.log("안녕");
  }, 1000);
});

let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);

var pants = 0;
var socks = 100;

function 해체분석기(문자, ...변수) {
  if (변수[0] == 0) {
    console.log(문자[0] + "안팔아요" + 문자[1] + 변수[1]);
  } else console.log(문자[0] + 변수[0] + 문자[1] + 변수[1]);
}
해체분석기`바지${pants} 양말${socks}`;

var 연습1 = ["hello", "world"];
console.log(연습1);
