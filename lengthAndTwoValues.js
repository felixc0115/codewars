/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.
*/

function alternate(n, firstValue, secondValue){
  const arr = []
  for (let i=1;i<=n;i++) {
    arr.push(i % 2 === 0 ? secondValue: firstValue)
  }
  return arr
}
