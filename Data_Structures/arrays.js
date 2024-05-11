//Arrays ;

const myArr = [1,"cat",3,true,5,6,false];
//or
const myarr = new Array(3,9,448);
//this is also an array ;

console.log(myArr[1])

//if we copy array we create shallow copy of the arrays (i.e reference is same so changes made will change the original aray )
let original = [1, 2, 3, 4, 5];
let copied = [...original];

let arr = [1, 2, 3, 4, 5];
let cp_arr = arr.slice();
// .concat() , .from all creates shallow copies of array 

//this creates a deep copy (w.o reference)
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = originalArray.map(x => x);

myArr.push(5)//adds 5 to the end of array ;
myArr.pop()//removes last element 

myarr.unshift(0)
console.log(myArr);

