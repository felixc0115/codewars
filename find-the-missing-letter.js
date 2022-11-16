DESCRIPTION:
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'


function findMissingLetter(array)
{
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const startingIndex = alphabet.indexOf(array[0].toLowerCase())
  const endingIndex = alphabet.indexOf(array[array.length-1].toLowerCase())
  const comparisonArray = alphabet.slice(startingIndex,endingIndex+1)
  const lowerCaseArray = array.map(letter=> letter.toLowerCase())
  const booleanArray = comparisonArray.map((letter) =>
    lowerCaseArray.includes(letter))
  const missingLetter = comparisonArray[booleanArray.indexOf(false)]
  return comparisonArray[0] !== array[0] ? missingLetter.toUpperCase() : missingLetter  ;
}
