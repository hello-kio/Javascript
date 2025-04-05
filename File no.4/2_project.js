//first we will get the values from weight and height ;
let weight = document.getElementById("weight");
const weight_unit = document.getElementById("weight-unit");
let height = document.getElementById("height");
const height_unit = document.getElementById("height-unit");



const calculate_button = document.getElementsByClassName("calculate-btn")[0];
let result = document.getElementsByClassName("bmi-output")[0];//output

//round off ni kia hua lmao bs kr deta hu 

calculate_button.addEventListener("click" , () => {

    if(weight_unit === "pounds"){
        weight.value = weight.value*0.453592;//converted from pounds to kgs
    }
    
    if(height_unit === "ft"){
        height.value = height.value * 0.3048;//converted from foot to meters
    }else{
        height.value = height.value*0.01;//converted from cms to meter
        // console.log(typeof(height));
    }

    // console.log(weight.value);console.log(height.value);
    let bmi = weight.value / (height.value*height.value) ;
    console.log(bmi);
    result.textContent = bmi.toFixed(2) ; 
})
//ab toh ai hi use krna padega qwq i was thinking uske bina debug krunga qwq hoi ik bolte hai but unko toh aata h na lmao 

// common mistakes :-
// document.getElementsByClassName()//this fucker returns elementsssss so we ahve to select oneeee usingggg [0] or something else -w- 
//only query selector uses css selctors not any else in selecting :#
//