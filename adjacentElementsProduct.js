// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.



// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

//Code Block

function solution(inputArray) {
    let sArr = inputArray;
    let a = 0;
    let b = 0;
    let ans = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < inputArray.length; i++){
        a = sArr[i];
        b = sArr[i + 1];
        
        if(a*b > ans){
            ans = a*b
        }
    }
    console.log(ans);
    return ans;
}

inputArray = [3, 6, -2, -5, 7, 3]