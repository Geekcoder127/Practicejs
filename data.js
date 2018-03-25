function ans(args,num){
  switch(num){
    case 0:
      return "Hello, World!";
      break;
    case 1:
      return args[0] + args[1];
      break;
    case 2:
      return args[0] - args[1];
      break;
    case 3:
      return args[0] * args[1];
      break;
    case 4:
      return args[0] / args[1];
      break;
    case 5:
      let triangleReturn = 0;
      for(var i = 1;i <= args[0];i++){
        triangleReturn += i;
      }
      return triangleReturn;
      break;
    case 6:
      var isPrime = true;
      for(var i = 2;i < args[0];i++){
        if(args[0] % i == 0){
          isPrime = false;
        }
      }
      return isPrime;
      break;
    case 7:
      let word = args[0].split("");
      let newWord = "";
      word.forEach(function(item,index){
        newWord = item + newWord;
      });
      return newWord;
  }
}

var data = [
  {
    name: "Hello World",
    args: [],
    test: [],
    desc: "Simple Hello World Program",
    inst: "Write a program that returns the string 'Hello, World!'",
    diff: 1
  },
  {
    name: "Addition",
    args: ["n1","n2"],
    test: [["5243","7395","39573"],["6754","286","12"]],
    desc: "Program to add two integers",
    inst: "Write a program that returns the sum of n1 and n2.",
    diff: 1
  },
  {
    name: "Subtraction",
    args: ["n1","n2"],
    test: [["56727","78324","4372"],["76543","23","21"]],
    desc: "Program to subtract integers",
    inst: "Write a program that returns n1 - n2.",
    diff: 1
  },
  {
    name: "Multiplication",
    args: ["n1","n2"],
    test: [["827","721","6542"],["6324","22861","14543"]],
    desc: "Program to multiply two integers",
    inst: "Write a program that returns the product of n1 and n2.",
    diff: 1
  },
  {
    name: "Division",
    args: ["n1","n2"],
    test: [["827","721","6542"],["6324","22861","14543"]],
    desc: "Program to divide two integers",
    inst: "Write a program that returns the n1 ÷ n2.",
    diff: 1
  },
  {
    name: "Triangle Numbers",
    args: ["n"],
    test: [["4","54","12"]],
    desc: "Program to get nth triangle number",
    inst: "Write a program that returns the nth triangle number.",
    diff: 2
  },
  {
    name: "Check Prime",
    args: ["n"],
    test: [["73","12365","7280461"]],
    desc: "Program to check if n is prime",
    inst: "Write a program that returns a true or false if n is prime.",
    diff: 2
  },
  {
    name: "Reverse",
    args: ["word"],
    test: [["hello","racecar","programming"]],
    desc: "Get the Reverse of a Word",
    inst: "Write a program that returns the reverse of the given string.",
    diff: 3
  }
];
var challengeData = JSON.parse(localStorage.getItem("data")) || [];
var challengeInfo = JSON.parse(localStorage.getItem("info")) || [];
