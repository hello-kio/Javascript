//control flow in js

if(true){

    console.log("this is a true statement")

}
//condition can be < , > , <= , >= , != and all also 
//= is an assignment operator , == loosely checks , === checks the type also ; 

//normal if, else statement  , nested if else , switch statement 

let month = 2 ;
switch (month) {
    case 1:
        console.log("jan")
        break;

    default:
        console.log("no month found")
        break;
}

//falsy values ; 0 , -0 , NaN , null , undefined , ""
//truthy values ; any other value is truthy including these ; " "<-- empty string with space 
//"0" zero written in string  ; 

//how to check an empty object as empty object is also a truthy value
const emptyobj = {};
if(Object.keys(emptyobj).length === 0 ){
    console.log("empty object");
}

//logical operators && || 
//nullish colescing operator
// (??): null undefined 

let val1 ; 
val1 = null ?? 4 ;//saftey net for null or undefined :3 
// val1 = null ?? 4 ?? 10 ?? 3 ;  stored value would be 4 as first normal value would be stored 
console.log(val1);

//ternary operator ?//sondition check in 1 statement
console.log((2%val1)? "yes even" : "odd value");

//normal for loop in js ;
for (let i = 0; i < 5 ; i++) {
    const element = i;
}
//break and continue keyword , while and do while loop in js simple stuff ;


//Array specific loops :-
const arr = [1,2,3,4,5];

for (const number of arr) {//for oteration on object(general object not js object) using a const variable'
    console.log(number);
}

const map = new Map();
//dublicate entries are not allowed in maps ;
map.set("Volkswagon" , "Germany");
map.set("Toyota" , "Japan");

// console.log(map);

//iteration over map is done using for of loop ;
for(const [car,country] of map){//basically the key val pairs are now divided like this in theose both variables
    // console.log(car);//this prints both key and value pair for one 
    console.log(car); 
}

//iteration ove objects ;
const myobj = {
    cn : "china",
    eu : "european union",
    kr : "Republic of South Korea"
}

for(const key in myobj){
    console.log(`${key} is used in place of ${myobj[key]}`);
}

//for in gets the keys whereas for of gets the values so use cautiously as it can lead to bugs 
//arrays also have key value pairs athe indexes are the keys and values are the values in it ;


//for each loop ;

const coding = ["cpp" , "java" , "python" , "ruby" ]

coding.forEach( function (languages){
    //basically coding's data would be used one by one for each using the variable language ;
    //console.log(`language : ${languages}`);
} )

 //same thing can be done using arrow function ;
 coding.forEach( (languages)=>{
    //basically coding's data would be used one by one for each using the variable language ;
    console.log(`language : ${languages}`);
} )


//iteration over an array containing objects ; 
 const lang  = [
    {
    name : "javascript",
    abbrevation : "js"
 },
    {
    name : "java",
    abbrevation : "java"
 },
    {
    name : "text",
    abbrevation : "txt"
 },
    {
    name : "c++",
    abbrevation : "cpp"
 }]
// very much usecase in databases :3
 lang.forEach(
    (item)=>{//for every iteration the data in array on every index is item now so 
        console.log(`Name of the language is ${item.name} and it's abbrevation is ${item.abbrevation}`);
    }
 )


 //filter is used to return values also unlike arrays.foreach :

 let arry = [1,2,3,4,5,6,9];
//  let ans = arry.filter((element)=> (element%2==0));// brackets is used so they have returned it but
// console.log(ans);

//if you open a scope you would have to write return as then you have opened a scope ;
let ans = arry.filter((element)=> {
    if(element%2==0)return element ;
    
});// brackets is used so they have returned it but
console.log(ans);
//filter have other usecases also ;
//works literally like website filter 


//chaining is basically using different different functions simpontaneously .map().map().filter();

//reduce in js :

let numbers = [1,3,5];

let initial_val = 0 ;
const my_total = numbers.reduce((accumulator,curr_val)=>(accumulator+curr_val),0);

console.log(my_total);

//practice 
const real = [1, 2, 3, 4, 5];

// let doubled = numbers.map(num => num * 2);
//console.log(real.map(num => num * 2)); // Output: [2, 4, 6, 8, 10]

//return real.map(num => num * 2) this won't work as return only works inside a scope;

//functions are passed as a reference only not as a functoin
function greet(name, callback) {//sayGoodbye is passed here but weather it ezecutes or not is not defined here but inside the scope of the functin
    
    console.log("Hello, " + name);
    callback(); // Executing the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback
greet("kio", sayGoodbye);





