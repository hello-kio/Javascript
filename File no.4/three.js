//best approach is element.addEventListener() ;

//e function in event listener
addEventListener("click" , function(e) {
    console.log(e) ; // this is event function
    //this gives us all the info about the event that just occurred ;
} , false) ;

// e.type	            The type of event (e.g., "click")   console.log(e.type); outputs as - "click"
// e.target	            The actual element that was clicked
// e.currentTarget	    The element the listener is attached to

// example of current Target:-

// <ul id="list">
//  <li>Item 1</li>
//  <li>Item 2</li>
//  <li><button>Click Me</button></li>
// </ul>

// const list = document.getElementById("list");

// list.addEventListener("click", (e) => {
//   console.log("target:", e.target);         // Actual clicked element
//   console.log("currentTarget:", e.currentTarget); // The UL with ID 'list'
// });

// toElement and srcElement 
// srcElement ≈ target
// toElement is used with mouseover/mouseout events — where mouse is going to
// example :
// element.addEventListener("mouseout", (e) => {
//     console.log("Mouse moved to:", e.toElement);
//   });
  
// e.clientX, e.clientY	Mouse coordinates when clicked
//imagine them as x and y axis of the browser viewport ;

// e.screenX / e.screenY
// These are properties of a Mouse Event (like a click), and they tell you the position of the mouse
// relative to the entire screen — not just the browser window.
//basically from screen pov not browsers which means they can be same also 

//both screen and client are measured in pixels;


// altKey, ctrlKey, shiftKey
//returns true if that modifier key was held during the event :3

// e.key	            Which key was pressed (for keyboard events)
document.addEventListener("keydown", function(e) {
    console.log("You pressed: ", e.key); // you pressed : enter ;
});

// e.preventDefault()	Stops default browser behavior (like form submit or link navigation)
// e.defaultPrevented   returns true if default is prevented ; 
// e.stopPropagation()	Stops the event from bubbling up
// e.timeStamp          Time (in milliseconds) since page load when the event occurred



//Event propogation - capturing and bubbling in events ;
//bubbling up 
//lets say there is an element and inside there is 1 more element and both have event listener as click 
//then when u click it the events bubble up by default that means the most inside elemnt's event will be executed first
//and then the outside one and then more outside (if there is any present)

//similarly there is one more as capturing which is the inverse of it imagine the same scenario and when u click the 
//most inside element the outermost event will be executed first then the inside then more inside till the event of the element u clicked is executed :
// for this you have to just write  true in the third parameter
addEventListener("click" , function(e) {
    console.log(e) ; // this is e function
    //this gives us 
} , true);

//both can be used as per the scenario but when we don't want to propogate the event then we can use
addEventListener("click" , function(e) {
    console.log(e) ; 
    e.stopPropagation();// this stops the event from propogation ; 
} , false);

// You can control how the event behaves:-
// event.stopPropagation() → stops further bubbling/capturing
// event.stopImmediatePropagation() → stops all other handlers too
// event.preventDefault() → prevents default action (e.g., link redirect)







