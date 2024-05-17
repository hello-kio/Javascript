//scope ;
// {
    // this is a scope
    // if with object then it is called object declaation
// }

//Why is var and const and let all these exists
// In modern JavaScript, the var keyword is less commonly used compared to let and const, and there are several reasons for this shift in preference:

// Block Scope vs. Function Scope: Variables declared with var have function scope, meaning they are visible throughout the function in which they are declared, regardless of block boundaries (like {} blocks). This can lead to unexpected behavior and make it harder to reason about your code. In contrast, let and const have block scope, meaning they are only visible within the block in which they are declared.

// Hoisting: Variables declared with var are hoisted to the top of their containing function or global scope, which means they are available throughout the entire scope before their declaration. This behavior can also lead to confusion and bugs. let and const are not hoisted in the same way, which makes code behavior more predictable.

// Reassignment and Immutability: Variables declared with let can be reassigned new values, while variables declared with const cannot be reassigned (though the value they point to may be mutable). This makes your code more predictable and helps prevent accidental reassignments.

// Block-scoped Constants: const provides a way to declare constants that are block-scoped, making it easier to reason about your code and preventing accidental reassignments.

// Compatibility and Best Practices: As JavaScript has evolved, best practices for variable declaration have shifted towards using let and const for improved readability, predictability, and maintainability. Many modern JavaScript developers prefer to avoid var in favor of these newer keywords.

// While var still works in JavaScript and can be used in certain situations, let and const offer more predictable behavior and are generally considered better alternatives in modern JavaScript codebases.

let a = 12
if(true){
    //scope
    let a = 10
}
console.log(a);

//nested scope :-

function one(){
    const userName = 'person1';

    function two(){
        const website = 'github';
        console.log(userName);
    }
    // console.log(website);//can't access website
    //this will say website is no there because that is declared in the scope of function two() ;
    two();
}

one() ;

function addOne(num){
    return num+1;
}

console.log(addOne(8));//this will print 9 ;

const addTwo = function (int){
    return int+2;
}
console.log(addTwo(3));//this will print 5 and we access functions declared in variables like this 