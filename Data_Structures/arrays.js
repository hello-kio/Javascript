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

myArr.unshift(0)//adds 0 to the start 
myArr.shift();//removes the first element 
console.log(myArr);

arr.includes('3')//returns true if exists and false if not
arr.indexOf('9')//-1 if not else index

const newArray = myArr.join()//returns array elements in a string

//slice and splice 
const ar1 = [1,3,4,6,8,9,2];
console.log(ar1.toString());

const ar2 = ar1.slice(2,4);//this will slice the array from index 2 (inclusive) to index 4(exclusive);//and will make a shallow copy ;
console.log(ar2.toString());
console.log(ar1.toString())
// output:-
// 4,6
// 1,3,4,6,8,9,2

const ar3 = ar1.splice(2,4);// this will slice the array from index 2 till 4 more indexes
//and will manipulate the original array also // 2,0 will not change anything in the array 
console.log(ar3.toString());
console.log(ar1.toString());
//output :-
// 4,6,8,9
// 1,3,2

const animal = ['cat' , 'dog' , 'mouse']
const bird = ['spearow' , 'pidgey' , 'murcrow']

// animal.push(bird);//as array takes any data as input it will take this array also as a data and insert the whole array in the last elemnt's place 
console.log(animal);

const add = animal.concat(bird);//concat always returns the joint array as a new one so we need to store it in a new one ; 
console.log(add);

//spreading in Js
const a1 = [1,3,4];
const nn = [...a1];
//this creates a shallow copy of a1 into nn ;
//similarly we can use this to join 2 arrays 
const joint = [...a1,...nn];//this will work the same as conct();
console.log(a1);console.log(nn);console.log(joint);

//flat(); is used to tten nested arrays
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = nestedArray.flat();//or .flat(infinity) so that all nested arrays can be flattened;

console.log(flatArray); // Output: [1, 2, 3, 4, 5, [6, 7]]

Array.isArray(arr)// returns if array or not true/false
Array.from("meow")//returns [m,e,o,w] lol
// Arrays.from({obj1}) //returns [] bcz dont know how to convert it to array 

//If you want to convert an object to an arry using array.from()// advanced topic
const obj = { name: "catto", age: 3, color: "brown" };

// Convert object to array using Object.entries() to get key-value pairs
const keyValueArray = Object.entries(obj);

// Convert array of key-value pairs to array using Array.from()
const newArra = Array.from(keyValueArray);

console.log(newArra); 
//output : [['name', 'catto'], ['age', 3], ['color', 'brown']] ;

let marks = 20 ; let marks2 = 35 ; let marks3 = 80 ;
const neww = Array.of(marks,marks2,marks3);//makes an array from the set of inputs
console.log(neww);
