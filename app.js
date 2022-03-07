// function 반복문() {
//   for (let i = 0; i < 11; i++) {
//     if (i == 8) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// 반복문();

// function 더하기(a, b) {
//   return a + b;
// }
// function 빼기(a, b) {
//   return a - b;
// }

// function calculate(command, a, b) {
//   switch (command) {
//     case "add":
//       return a + b;
//     case "substract":
//       return a - b;
//     case "divide":
//       return a / b;
//     case "multiply":
// //       return a * b;
// //     case "remainder":
// //       return a % b;
// //     default:
// //       throw Error("unkown command");
// //   }
// // }

// // // console.log(calculate("add", 3, 5)); //8

// // var 함수 = () => {};

// // 함수();

// // [1, 2, 3, 4].forEach(a => console.log(a));

// // var 사람 = {
// //   name: "손흥민",
// //   sayHi: function () {
// //     console.log(`안녕 나는 ${사람.name}`);
// //   },
// // };

// // 사람.sayHi();

// // var 자료 = {
// //   data: [1, 2, 3, 4, 5],
// // };

// // 자료.전부더하기 = function () {
// //   var 합 = 0;
// //   this.data.forEach(function (a) {
// //     합 = 합 + a;
// //   });
// //   console.log(합);
// // };

// // 자료.전부더하기();

// // document.getElementById("버튼").addEventListener("click", function () {
// //   setTimeout(function () {
// //     console.log("안녕");
// //   }, 1000);
// // });

// // let a = 1;
// // var b = 2;
// // window.a = 3;
// // window.b = 4;

// // console.log(a + b);

// // var pants = 0;
// // var socks = 100;

// // function 해체분석기(문자, ...변수) {
// //   if (변수[0] == 0) {
// //     console.log(문자[0] + "안팔아요" + 문자[1] + 변수[1]);
// //   } else console.log(문자[0] + 변수[0] + 문자[1] + 변수[1]);
// // }
// // 해체분석기`바지${pants} 양말${socks}`;

// // var 연습1 = ["hello", "world"];
// // console.log(연습1);

// // var a = 5;
// // function test() {
// //   console.log("1", a);
// //   var a = 4;
// //   console.log("2", a);
// //   a = 3;
// //   return function () {
// //     console.log("3", a);
// //   };
// // }

// // test()();

// // var a = [1, 2, 3];
// // var b = "김밥";
// // var c = [...b, ...a];
// // console.log(c);

// // var a = [1, 2, 3];
// // var b = ["you", "are"];
// // var c = function (a, b) {
// //   console.log([[...a], ...[...b]][1]);
// // };
// // c(a, b);
// // function 함수(a = 5, b = a * 2) {
// //   console.log(a + b);
// // }
// // 함수(undefined, undefined);

// // function 어레이(...rest) {
// //   return rest;
// // }

// // var newArray = 어레이(1, 2, 3, 4, 5);
// // console.log(newArray);

// // var 이름1 = { name: "김" };
// // console.log(이름1);
// // function 변경(obj) {
// //   obj = { name: "park" };
// //   console.log(obj);
// // }

// // 변경(이름1);

// // console.log(이름1);

// // var 숫자1 = { age: 50 };
// // console.log(숫자1); // ?
// // function 변경(obj) {
// //   obj.age = 100;
// //   console.log(obj); // ?
// // }

// // 변경(숫자1);
// // console.log(숫자1); // ?

// class 할아버지 {
//   constructor(name) {
//     this.성 = "kim";
//     this.name = name;
//   }
// }

// var 할아버지1 = new 할아버지("철수");

// class 아버지 extends 할아버지 {
//   constructor() {
//     super(name);
//     this.나이 = 50;
//   }
// }

// var 아버지1 = new 아버지("만수");

// var 사람 = {
//   name: "park",
//   age: 30,
//   nextAge() {
//     return this.age + 1;
//   },
//   setAge(i) {
//     this.age = parseInt(i);
//   },
// };

// class 강아지 {
//   constructor(type, color) {
//     this.type = type;
//     this.color = color;
//   }
//   한살먹기() {
//     if (this instanceof Cat) {
//       this.age++;
//     }
//   }
// }

// var 강아지1 = new 강아지("말티즈", "white");
// var 강아지2 = new 강아지("진돗개", "brown");

// class 고양이 extends 강아지 {
//   constructor(type, color, age) {
//     super(type, color);
//     this.age = age;
//   }
// }

// var 고양이1 = new 고양이("코숏", "white", 5);
// var 고양이2 = new 고양이("러시안블루", "brown", 2);

// class unit {
//   constructor(기본공격, 기본체력) {
//     this.기본공격 = 5;
//     this.기본체력 = 100;
//   }
//   get battlePoint() {
//     return this.기본공격 + this.기본체력;
//   }
//   set heal(num) {
//     this.기본체력 = this.기본체력 + num;
//   }
// }

// var 유닛1 = new unit();
// console.log(유닛1);
// 유닛1.heal = 50;

// // class 홀짝 {
// //   constructor(...숫자) {
// //     this.odd = [];
// //     this.even = [];
// //   }
// //   set 분배기(...숫자) {
// //     for (i=0; i<...숫자.length; i++)
// //       if (...숫자%0 )
// //   }
// // }

// var data = {
//   odd: [],
//   even: [],
//   setter함수: function (...숫자들) {
//     숫자들.forEach(a => {
//       if (a % 2 == 0) {
//         this.even.push(a);
//       } else {
//         this.odd.push(a);
//       }
//     });
//   },
// };

// data.setter함수(1, 2, 3);

var arr = [2, 3, 4];

var [a, b, c] = [2, 3, 4];

// // var 밥 = { 아침: "김치찌개", 점심: "햄버거" };
// var { 아침, 점심} = { 아침: "김치찌개", 점심: "햄버거" };

var obj = { 아침: "김치찌개", 점심: "햄버거" };
function 함수(파라미터) {
  console.log(파라미터);
}

var 프로미스 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

// 프로미스
//   .then(function () {
//     console.log("성공이여");
//   })
//   .catch(function () {
//     console.log("실패여");
//   });

var img = document.querySelector("#test");

var 이미지로딩확인기계 = new Promise(function (성공, 실패) {
  img.addEventListener("load", function () {
    성공();
  });
  img.addEventListener("error", function () {
    실패();
  });
});

이미지로딩확인기계.then(function () {
  console.log("야 이거 성공이여");
});

$.ajax({
  type: "GET",
  url: "https://codingapple1.github.io/hello.txt",
}).done(function (결과) {
  console.log(결과);
});

$.get("https://codingapple1.github.io/hello.txt").done(function (결과) {
  console.log(결과);
});

async function 성공판독기() {
  var 판독기 = new Promise(function (성공, 실패) {
    document.getElementById("버튼").addEventListener("click", function () {
      성공("성공이다");
    });
  });

  var 결과 = await 판독기;
  console.log(결과);
}

성공판독기();
