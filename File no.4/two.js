//DOM = document object model;

// when we do console.log(window) on a web browser that window is an object 
//and we get details about that object :3
//we can also do console.log(window.document) to get the document from thw window object 

//                  Document 
//                     |
//                    HTML
//                 /       \  
//             Head         Body
//              |            |
//            Title         div- attribute
//              |             | \
//             / \           h1  text node
//    text node   attribute 

//document._________  many things can be done from here (these are methods)


//    console things i did in my webpage :-
// 
// 
// console
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
// console.log(document)
// VM208:1 
// undefined
// console.log(document).getElementById()
// VM249:1 
// VM249:1 Uncaught TypeError: Cannot read properties of undefined (reading 'getElementById')
    // at <anonymous>:1:22
// document.getElementsByClassName(black-bg)
// VM470:1 Uncaught ReferenceError: black is not defined
    // at <anonymous>:1:33
// document.getElementsByClassName(black-bg)
// VM474:1 Uncaught ReferenceError: black is not defined
    // at <anonymous>:1:33
// document.getElementsByClassName("black-bg")
// HTMLCollection [div.black-bg]


// let first = document.getElementsByClassName("black-bg")[0]; console.log(first); //it returns the whole element
// VM842:1 <div class=​"black-bg">​…​</div>​
// undefined
// let first = document.getElementsByClassName("black-bg")[0];console.log(first.children)//it returns the childrens of the elements ;
// VM860:1 HTMLCollection(2) [h1#first, p.Learning, first: h1#first] // first and heading are class names


// Selecting Elements
// These methods help find elements in the DOM.
// chat gpt examples for understanding how to use the elements ;
// ->document.getElementById(id) (Selects an element by its ID)

// let title = document.getElementById("main-title");
// console.log(title.textContent); // Logs the text inside the element

// ->document.getElementsByClassName(className) (Selects elements by class)

// let boxes = document.getElementsByClassName("box");
// console.log(boxes[0]); // Logs the first element with class "box"

// ->document.getElementsByTagName(tagName) (Selects elements by tag name)

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length); // Logs number of <p> elements

// ->document.querySelector(selector) (Selects the first matching element)

// let firstBox = document.querySelector(".box");
// console.log(firstBox); // Logs first element with class "box"

// ->document.querySelectorAll(selector) (Selects all matching elements)

// let allBoxes = document.querySelectorAll(".box");
// console.log(allBoxes); // Logs a NodeList of all elements with class "box"
                          

// 📌 2. Modifying Elements
// Change the content, attributes, or style of elements.

// 👉 element.textContent (Changes text)

// let heading = document.getElementById("title");
// heading.textContent = "Updated Title!";

// 👉 element.innerHTML (Changes inner HTML)

// let div = document.getElementById("content");
// div.innerHTML = "<b>Bold Text</b>"; // Inserts HTML

// 👉 element.setAttribute(attr, value) (Sets an attribute)

// let img = document.querySelector("img");
// img.setAttribute("src", "new-image.jpg");

// 👉 element.getAttribute(attr) (Gets an attribute)

// let link = document.querySelector("a");
// console.log(link.getAttribute("href")); // Logs href value

// 👉 element.removeAttribute(attr) (Removes an attribute)

// let input = document.querySelector("input");
// input.removeAttribute("disabled");

// 👉 element.style.property = "value" (Changes inline CSS)

// let button = document.querySelector("button");
// button.style.backgroundColor = "blue";



console.log("hello")
//querySelectorAll() <-- this returns the datatype of nodelist that is not like array but behaves somewhat like array 

//traversing html collection ;

