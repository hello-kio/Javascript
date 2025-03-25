//Functions :
function fun1(){
    console.log('h')
    console.log('i')
    console.log('i')
}

// console.log(fun1());
fun1()//output : h /n i /n i ;
//fun1 is the reference and fun1() is the execution of Js

function addTwoNumbers(num1,num2){//num1 and num2 are parameters;
     console.log(num1+num2);
     return num1+num2//return is always the last to execute in a function 
}
const a = addTwoNumbers(3,9);//there are arguments ;
console.log(a);

//console.log is not return ;

function loginMessage(userName){
    if(userName===undefined){
        console.log(`enter a user name :`);
        return 
    }
    return `${userName} just loggedin in`;
}
//return is return and console.log is like print statement ;

console.log(loginMessage('meow'));
// console.log(loginMessage()); //output : undefined just logged in ;

function loginMessage(userName = "General user"){
    return `${userName} just loggedin in`;
}//this sets the default username as : general user ; so even if no value is passed in the function while calling it then also it will not be undefined  ; bcz when it will be passed the value will be overwritten ;

//spread operator is rest operator also it depends on where it is used that it will be called spread or rest operator

function calculatePrice(...num){
    return num
}
console.log(calculatePrice(132,12,765,1,23,54,2));//we passed so mant variables but the function only accepts 1 variable so now we use the rest operator that converts the output to an array of all the input values 

//how to pass objects through function ;
const obj1 = {
    name : "player1",
    age: 25,
    status : 'bronze'
}
function objpassing(my_object){
    console.log(`${my_object.name} has been promoted to ${my_object.status}`);
}

objpassing(obj1);
//objpassing({           //this can also be done like this
//     name : "player1",
//     age: 25,
//     status : 'bronze'
// })

//console.log is printing the o/p and return is returning from the function ;
