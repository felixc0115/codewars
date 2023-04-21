/* 
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
 const numObject = {}
 const uniqueList = []
 numList.forEach((num) => {
   if(!numObject[num]) {
     numObject[num] = 1
   }
   else {
     numObject[num] ++ 
   }
 })
  for (const num in numObject) {
    if(numObject[num] === 1) {
      uniqueList.push(+num)
    }
  }
  let totalSum = uniqueList.reduce((total, curr) => total + curr, 0)
  return totalSum
}
