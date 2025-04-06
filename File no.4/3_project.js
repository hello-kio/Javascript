
// console.log(time);

setInterval(()=>{
    //we are using set interval because we want to update it everysecond 
    let time = new Date();console.log(time);

    //padstart only works for strings :) it was converted to string for that purpose only 
    let day = String(time.getDate()).padStart(2,"0") ;
    let month = String(time.getMonth()+1).padStart(2,"0") ;
    let year = String(time.getFullYear());

    let date = `${day} ${month} ${year}`; 

    let hours = String(time.getHours());
    let minutes = String(time.getMinutes()).padStart(2,"0");
    let seconds = String(time.getSeconds()).padStart(2,"0");
    let ampm = hours< 12 ? "am" : "pm" ;

    hours = hours % 12 || 12 ; //for changing the format ;

    let clock = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = clock;


}, 1000);