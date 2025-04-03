//events() are the events that happen like clicking of a cursor and manythings
//it fires a signal whenever an event happens() and to capture that signal we need 
//an event handler 



//for random button :
const rand_button = document.getElementById("qb");
// console.log(rand_button);
function random(num){
    // let a = Math.floor(Math.random() * 10);
    // let b = Math.floor(Math.random() * 10);
    // let c = Math.floor(Math.random() * 10);
    // return (a*10+b*1+c*100);

    return Math.floor(Math.random() * (num + 1));
}

rand_button.addEventListener("click" , ()=> {
    let val = `rgb( ${random(255)} ,${random(255)} ,${random(255)} )`;
    document.body.style.backgroundColor = val ;
});

//for normal buttons
const red_button = document.getElementById("redb");
const blue_button = document.getElementById("blueb");
const green_button = document.getElementById("greenb");

red_button.addEventListener("click" , ()=> {
    document.body.style.backgroundColor = "red" ;
});

blue_button.addEventListener("click" , ()=> {
    document.body.style.backgroundColor = "blue" ;
});

green_button.addEventListener("click" , ()=> {
    document.body.style.backgroundColor = "green" ;
});



