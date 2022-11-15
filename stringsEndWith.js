function solution(str, ending) {
  let strArray = str.split("");
  let resultArray = [];
  for (let i = 0; i < ending.length; i++) {
    resultArray.unshift(strArray.pop());
  }
  return ending === resultArray.join("");
}
