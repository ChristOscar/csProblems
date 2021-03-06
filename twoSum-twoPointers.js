// Given an array and a target(integer) return two elements of the array whose sum is equal to the target

let twoSumTwoPointers = (array, target) => {
    // initializing i and j to point at the first and last elements respectively
    let i = 0;
    let j = array.length - 1
  
    // Continue looping until our base condition is met
    while(array[i] + array[j] !== target){
      // Increment i (i.e. increase array[i]'s value) if the sum is less than the target
      if(array[i] + array[j] < target){ i++ }
      // Decrement j (i.e. decrease array[j]'s value) if the sum is greater than the target
      if(array[i] + array[j] > target){ j-- }
      // Returning false if i >= j (i.e. no solution possible w/given parameters)
      if(i >= j) return false;
    }
    
    // This code will be reached only when our base condition is satisfied
    return [i, j]
  }

//   hash table method 
const nums = [1, 2, 3, 4, 5];
//const target = 9;

function twoSumHash(nums, target) {
    let indices = {}
    for(currentIndex in nums){
        let compliment = target - nums[currentIndex]
        if(indices[compliment]){
            return [indices[compliment],  currentIndex]
        }
        indices[nums[currentIndex]] = currentIndex
    }
};

const array = [1,2,3,4,5];
const target = 3;
twoSumTwoPointers(array,target);