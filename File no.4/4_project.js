const start_button = document.querySelector(".start-btn") ;
const check_button = document.querySelector("#checkBtn");
const user_guess = document.getElementById("userGuess");
const restart_button = document.querySelector(".restart-btn");

// console.log(guess);

let secret_number ;
let chances ;


window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("autoStart") === "true") {
        localStorage.removeItem("autoStart");
        start_button.click();
    }
});


start_button.addEventListener("click" , ()=>{
    document.querySelector(".hidden").classList.remove("hidden") ;
    document.querySelector(".chances-remaining").style.display = "block";
    
     secret_number = Math.floor(Math.random() * 100) + 1;
    console.log(secret_number);

    chances = 7 ;
    return;
});

check_button.addEventListener("click" , ()=>{

    chances--;
    document.getElementById('chances').textContent = chances;
    if(chances === 0){
        document.getElementById('chances').textContent = chances;
        document.getElementById("message").textContent = "🫢oops! game over ";
        user_guess.disabled = true;
        return;
    }

    let guess = Number(user_guess.value);
    
    //this was for 2 digit number before lol
    if (guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number!💢";
        return;
    }

    if(guess === secret_number) {
        document.getElementById("message").textContent = "🎉 You guessed it!";
        user_guess.disabled = true;

        document.querySelector(".range-text").style.fontSize="27px";
        document.querySelector(".range-text").textContent="🥳";
        document.querySelector(".question-mark").textContent= `${secret_number}`;

      } else if (guess > secret_number + 10) {
        document.getElementById("message").textContent = "Too High!";
      } else if (guess > secret_number) {
        document.getElementById("message").textContent = "High!";
      } else if (guess < secret_number - 10) {
        document.getElementById("message").textContent = "Too Low!";
      } else {
        document.getElementById("message").textContent = "Low!";

    }

});

restart_button.addEventListener("click",restart_game);


function restart_game(){
    // chances = 7 ;document.getElementById('chances').textContent = chances;
    // secret_number = Math.floor(Math.random() * 100) + 1;
    // user_guess.value="";
    // document.getElementById("message").textContent="";
    // console.log(secret_number);
    // user_guess.disabled = false;

    localStorage.setItem("autoStart", "true");
    location.reload();

}