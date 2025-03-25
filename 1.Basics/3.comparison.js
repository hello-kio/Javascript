console.log(null>0);//false

console.log(null==0);//false

console.log(null>=0);//true

//== is not same as comparators so it does not convert null into a number 

//== vs === 
//cpnversions with == whilw comparing 
//If either operand is a string, the other operand will be converted to a string.
// If either operand is a number, the other operand will be converted to a number.
// If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
// If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
// If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false.

console.log(null > 0);  // false — 0 > 0, nope
console.log(null == 0); // false — null don’t vibe with 0
console.log(null >= 0); // true  — 0 >= 0, yep

// Some == examples:
console.log("2" == 2);      // true — "2" vs "2"
console.log(true == 1);     // true — 1 vs 1
console.log([1] == 1);      // true — "1" vs 1
console.log(null == undefined); // true — null and undefined are pals