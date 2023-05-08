/*
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

*/

var fibsFizzBuzz = function(n) {
  if(n==1) {
    return [1]
  }
    let fibArray = [1,1]
    for (let i=2; i<n; i++) {
      fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }
  for(let i =0;i<=fibArray.length; i++) {
     if(fibArray[i] % 3 === 0 && fibArray[i] % 5 === 0) {
      fibArray[i] = 'FizzBuzz'
    }
    else if (fibArray[i] % 3 === 0) {
      fibArray[i] = 'Fizz'
    }
    else if(fibArray[i] % 5 === 0) {
      fibArray[i] = "Buzz"
    }
  }
   
  
  return fibArray
}
