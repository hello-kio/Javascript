// Objects
//somrthing named singleton ;
//When we create objects like literals then singleton is not made
//but when we make objects using constructors singleton is made ;
const sym = Symbol("key_one")
const user = {
    name : "person1",//key value pair ;
    [sym] : 'value',//only way to use a key in object other wise sym will normally be treated as a key sym not the symbol sym the type of will be string now the type of will be a symbol ;
    age : 21 ,
    location : 'arizona',
    loggedInDays : ['monday','tuesday','saturday']//you can give objects also as value ;
};
// console.log(user)
//we can access the object's properties using 
console.log(user.age);//meathod 1;
console.log(user['age']);//meathod 2 because  the keys are also taken as strings in Js
//if key is defined as a string in the object only then then you cannot access it using a "." ;

//changing values of an object ;
user.age = user.age + 10 ;
// console.log(user.age);

// Object.freeze(user)//to lock the object ;
user.age = user.age + 10 ;
console.log(user.age);

user.greet = function(){
    console.log('good morning');
}

user.greet2 = function(){
    console.log(`Hello js user "${this.name}" good morning`); //this.name=user.name
}

console.log(user.greet);//returns the reference of the function ;
console.log(user.greet())//returns good morning
console.log(user.greet2())//


const appUser = {}
appUser.name = "person1"
appUser.id = "98fu4nt6dh51bg";
appUser.online = false ;

console.log(appUser);

const regUser = {}
regUser.email = 'xyz@gmail.com';
regUser.fullName = {
    userFullName : {// key value pair so we are using : only althought we use const name = { } for any object but inside it is a key : value pair
        firstName : "Cyborg",
        lastName : "Franky"
    }
}

console.log(regUser.fullName.userFullName.lastName);
//we also use console.log(regUser.fullName?) ; this returns the value if exists so we don;t have to put many more if elses ;

obj1 = {1:'a' , 2:'b'}
obj2 = {3:'c' , 4:'d'};

obj3 = Object.assign({},obj1,obj2)//this is used to add 2 objects and we use {} in the start so that even if those 2 are empty we can be returned an empty array and usi array m saare elements store hote hai just high grade syntax nothing else  

//can also be done using spreading
//obj3 = {...obj1,...obj2}//same output
console.log(obj3);

//an array of objects
let arr = [
    {
        id : '3xc45vb67n'
    },{
        id : '2c3v4b5n6'
    },{
        id : '3c7o4v8as'
    },
]

console.log(arr[1].id);//this is how you access objects in an array ;

console.log(Object.keys(user));//you can access all keys of the object(user)
console.log(Object.values(user));//you can access all values of the object(user) 
console.log(Object.entries(user));//you can access all key values of the object(user) in an array ; 

console.log(user.hasOwnProperty('location'));//returns true if location named keys exists else false ;
















































