


//let a = 4 + 8;
//let b = 2 + 6;

// Immediately invoke function calls it right away 
const findBiggestFraction = ((a, b) => {
    let result;
    a>b ? result = ['a', a] : result = ['b', b];
    return result;

   // console.log(result);

})(4 + 8, 2 + 6)

console.log(findBiggestFraction);


//findBiggestFraction();







/* const findBiggestFraction = (a, b) => {
  
    a>b ? console.log('a: ', a) : console.log('b: ', b); 
    
}

let firstFraction = 4 + 8;
let secondFraction = 2 + 6;

// Now using firstFraction and secondFraction
findBiggestFraction(firstFraction, secondFraction);

// No longer using firstFraction or secondFraction anymore
findBiggestFraction(2 + 2, 7 + 7);
*/







/* const findBiggestFraction = () => {
  
    a>b ? console.log('a: ', a) : console.log('b: ', b); 
    
}

let a = 4 + 8;
let b = 2 + 6;

findBiggestFraction(); */