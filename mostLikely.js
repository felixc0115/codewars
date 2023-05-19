/*

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

*/


function mostLikely(prob1,prob2){
  const divide = (a,b) => a / b
  return divide(...prob1.split(':')) > divide(...prob2.split(':')) 
}
