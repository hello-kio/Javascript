// Data types and conversions :-

//strng , number , boolean ->for conversion String , Number , Boolean

let age = "23" ;
let conv = Number(age);

//above casting feature converts the variable in age to number if it can 
// and if it can't then console.log return NaN(not a number);

console.log(typeof(conv));
console.log(conv);

//true will be converted to 1 and false will be to 0 ;
// null will be converted to 0 ;
//undefined will be converted to NaN (but the type of NaN will be a number only)

//1=> true if we convert to boolean 
//""=> false; but "xyz"=> true ;
//33--> string conversion makes it 33 only lol 
// but the type gets changes to string 

// ------------------->Operations<---------------------
//just checking 
//string addition and other operation are same like any other language

console.log("2" + 1 +9);
//if the first is string then it converts the whole into string
console.log(2 + "1" +9);
//output for this is same as above
console.log(1 + 2 + "3" );
//for this the output would be first numbers would be added then the string conversion

let x = 3;
const y = x++;
x--;
console.log(x,y);
