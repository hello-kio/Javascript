    //primitive and non primite data types
// categorization on the basis of how they store data and how we can access data 

//primitive : string , Number(no float) , boolean , null, undefined , BigInt , symbols

//non-primitive : arrays , objects , functions (reference variable);

//Js is a synamically types language because we don't have to defien what data type are we gonna store in the variable and we can change it in later stage for example :
let meow = "cat" 
meow = 3783 
// meow = 022424
//octal literals are not allowed
// explanation : In non-strict mode, JavaScript allows the use of octal literals, which are numbers with a leading zero (0) followed by a sequence of octal digits (0-7), such as 012 (which represents the decimal value 10). However, octal literals can be confusing and error-prone, especially for beginners, because the leading zero can easily be overlooked.

// To address this, ECMAScript 5 introduced strict mode, which among other things, disallows octal literals. In strict mode, attempting to use an octal literal results in a syntax error.

meow = false 

//we did't had to tell everytime that we are changing it to int or boolean and all

// defination : Dynamic typing means that the data type of a variable is determined at runtime, not at compile time. In JavaScript, you don't need to explicitly declare the data type of a variable when you declare it. Instead, the data type of a variable can change during the execution of the program. For example, you can assign a string to a variable and later assign a number to the same variable without any explicit type conversion.

let UserEmail ; // let UserEmail = undefined both are same ;

//symbols;
const id = Symbol("123")
const uwuid = Symbol("123")

console.log(id===uwuid)
//output == false even if the symbol are same they are unique :)

// Array
let names = ["rohan", "meow" , "lambda"]
console.log(typeof(names));

//defining object
let user = {//we can put any variable in the object
    name: "kio",
    age : "20"
}

//variables can store a function also 
const zurr = function(){
    console.log("hello world");
}

//type of operator in Js
// Type   	Result
// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"

//ques : why null is an object in Js
//ans : IN early Js values were used with a tag and were represented with a tag
//this was done to distinguish between diff data types and manage memory allocation  
//for object the type tag was initially set to 0;
// for NULL the value was represented by null pointer which is stored in memory address as 0x00 in many platforms
//object--type-->0 ; NULL--type-->0 sp effectively null-->object
//In modern Js Null is a primitive data type and is not considered an object but for compatibility erasons it till now also shows : "object"

//-------->stack and heap<-----------------

//stack memory(primitive data types)
//heap memory (non-primitive data types)

//you get *copy in stack* and *reference in heap* 





