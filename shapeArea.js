// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by 
// taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.

// Code Block 


function solution(n) {
    // Condinials 
    if(n <= 1) return n;
    
    let a = (n**2+(n-1)**2);
    console.log(a);
    return a
}

// n=2;
// n=3;