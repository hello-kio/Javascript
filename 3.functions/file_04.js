//Immidiately Invoked Funcion Expression (IIFE)

function one (){
    console.log("user loggedIn");
}

one();//this is how we generally call the function but to immidiately invoe it we put brackets to the last of it and also wrap the function in brackets;

(function two(){//this is a named IIFE
    console.log("logged out");
})();//this semi-colon is necessary because immidiately invoked funciton don't know when to stop so this semicolon is used to stop them ;
//aarrow function can also be used inside an immidiately invoked function

//this is how we pass variables in it
(function addtwo(num1,num2){
    console.log(num1+num2);
})(9,6);
