// Arrow functions and this keyword ;

const user = {
    userName : "person1",
    price : 99,

    welcomeMssg : function(){
        console.log(`${this.userName} Welcome to website`);
        //this is used for accesing current context
        console.log(this);//this will print the object's values at the time of execution
    }

}

user.welcomeMssg()
user.userName="person2"
user.welcomeMssg()


console.log(this);//this will print empty {} ;
//whereas in a browser environment
// the global object is window. This global object provides a context for running JavaScript and acts as a container for global variables, functions, and other objects.

function nuke(){
    console.log(this);
}

// nuke();


//we can't use this inside a function like we do in objets
function nuke(){
    let userName = "github"
    console.log(this.userName);//this will say undefined ;
}
// nuke;
//but
function nuke(){
    userName = "github"
    console.log(this.userName);//this will say github ;
}
// nuke();

//function stored in a variable ;
// const cat = function () {
//     userName = "github"
//     console.log(this.userName);
// }
// we can do something like this to make it an arrow function
const cat = () => {
    userName = "github"
    console.log(this.userName);
}
cat();

//if we have small code then we can write it ike this without parenthesis just in a bracket and we don't have to write return also ;it will perform the same ;
const adD = (num1,num2) => (num1+num2)

console.log(adD(1,9));

//we can also return objects in this
const last = () => ({name : "cat"})
console.log(last());//this will reutn the object{name : "cat"}




