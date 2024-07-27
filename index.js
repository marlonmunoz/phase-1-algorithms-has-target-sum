function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if((array[i] + array[j]) === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  step 1: iterate array[i]
  step 2: iterate array[j]
  step : conditional (true or false)
  step 4: return true or false
*/ 

/* 
  Add your pseudocode here
Define the function 
  Iterate the array;
    Iterate the array [nested array] to have pair to add
      If the pair sum of elements inside array equals the target
    return true;
  or return false if the sum doesn't match
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
