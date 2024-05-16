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

