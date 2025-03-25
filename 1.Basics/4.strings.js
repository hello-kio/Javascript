const user = "kio" ;
const age = 20 ;

//we can do console.log(user+age) but it is not recommended because modern js user string interpolation for this purpose example:-

console.log(`Name of the user is ${user} and age id ${age}`)

//string can also be declared using 
const UserName = new String("name1")
//new String() constructor creates a new object wrapper around the string value, while the string literal syntax creates a primitive string value.

//it is advisable to use it like primitive declaration only 

// const str1 = "kio";
// const str2 = new String("kio");
// console.log(str1 === str2); // output = false
let PersonName = "kiothecat";
console.log(PersonName.length);

//there are many methods for string
console.log(PersonName.charAt(3)) 
console.log(PersonName.indexOf('t')) ;
//.substring(start,end) //end index is excluded

//.slice() only meathod in which you can use -ve values
let str = "hello world";

console.log(str.slice(0, 5));   // Output: "hello"
console.log(str.slice(6));      // Output: "world"
console.log(str.slice(0, -6));  // Output: "hello"
console.log(str.slice(-5));     // Output: "world"
console.log(str.slice(-5, -1)); // Output: "worl"
//While positive numbers follow the 0-based indexing convention, -ve numbers used as indices count backward from the end of the string.

//trim 
const str4 = "   soeino  "
console.log(str4.trim());
//it can have start and end index also ;

const str5 = "kio-thecat";
console.log(str5.replace("-","_"))//kio_thecat

//explore other meathods ;
// charAt(index): Returns the character at the specified index in the string.
// concat(str1, str2, ...): Concatenates two or more strings and returns a new string.
// includes(searchString): Determines whether the string contains the specified substring.
// indexOf(searchValue[, fromIndex]): Returns the index of the first occurrence of the specified value within the string.
// slice(startIndex[, endIndex]): Extracts a section of a string and returns it as a new string.
// split(separator[, limit]): Splits a string into an array of substrings based on a specified separator.
// substr(startIndex[, length]): Returns the characters in a string beginning at the specified index through the specified number of characters.
// substring(startIndex[, endIndex]): Returns the substring between two indices in the string.
// toLowerCase(): Converts all characters in the string to lowercase.
// toUpperCase(): Converts all characters in the string to uppercase.
// trim(): Removes whitespace from both ends of the string.
// startsWith(searchString[, position]): Determines whether the string begins with the specified substring.
// endsWith(searchString[, length]): Determines whether the string ends with the specified substring.
// replace(searchValue, replaceValue): Replaces occurrences of a specified value with another value in the string.
// match(regexp): Searches a string for a match against a regular expression and returns an array of matches.
// charAt(): Returns the character at the specified index in the string.
