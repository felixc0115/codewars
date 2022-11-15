DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false



function solution(str, ending) {
  let strArray = str.split("");
  let resultArray = [];
  for (let i = 0; i < ending.length; i++) {
    resultArray.unshift(strArray.pop());
  }
  return ending === resultArray.join("");
}
