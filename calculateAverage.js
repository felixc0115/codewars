/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

const findAverage = (array) => array.length ? array.reduce((total,curr) => total +curr)/array.length : 0
  

