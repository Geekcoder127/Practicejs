function ans(args,num){
  switch(num){
    case 0:
      return "Hello, World!";
      break;
    case 1:
      return args[0] + args[1];
      break;
    case 2:
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
    name: "Reverse",
    args: ["word"],
    test: [["hello","racecar","programming"]],
    desc: "Get the Reverse of a Word",
    inst: "Write a program that returns the reverse of the given string.",
    diff: 2
  }
];
var challengeData = JSON.parse(localStorage.getItem("data")) || [];
var challengeInfo = JSON.parse(localStorage.getItem("info")) || [];
