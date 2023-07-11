/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

const findAverage = (arr) => arr.length ? arr.reduce((total,curr) => total +curr)/arr.length : 0
  

