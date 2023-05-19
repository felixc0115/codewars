/*

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

*/


function mostLikely(prob1,prob2){
  const num1Arr = prob1.split(':')
  const num2Arr = prob2.split(':')
  return (num1Arr[0]/num1Arr[1]) >  (num2Arr[0]/num2Arr[1])  
}
