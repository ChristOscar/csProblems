// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example
// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].
// * For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
// * For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
// * For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
// * For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
// * For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.
// * 

// Code Block
const numbers = [8, 5, 6, 16, 5];
const left = 1;
const right = 3


function solution(numbers, left, right) {
    const result = false;
    const arr = [];
    for (let i = 0; i < numbers.length; i++){
        let value = i + 1; 
        let ans = numbers[i].toFixed(1) / value.toFixed(1)
        if(ans >= left && ans <= right){
            arr.push(true);
        }else {
            arr.push(false);
        }
        // console.log(value)
        console.log(ans)
    }
    return arr;
}

// Attempt 2
function solution(numbers, left, right){
    let arr = []
    for(let i = 0; i < numbers.length; i++){
        let x = numbers[i]/(i + 1)
        if(left <= x && x <= right){
            if(Number.isSafeInteger(x)){
                arr.push(true)
            } else {
                arr.push(false)
            }
        } else {
            arr.push(false)
        }
    }
    return arr
}
