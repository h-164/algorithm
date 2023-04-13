const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
  M -= 45;

  if (M < 0) {
    M += 60;
    H -= 1;
  }
  if (H < 0) {
    H = 23;
  }
  console.log(H, M);
}