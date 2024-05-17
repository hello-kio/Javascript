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

nuke();


//we can't use this inside a function like we do in objets
function nuke(){
    let userName = "github"
    console.log(this.userName);//this will say undefined ;
}
nuke;
//but
function nuke(){
    userName = "github"
    console.log(this.userName);//this will say github ;
}
nuke;






