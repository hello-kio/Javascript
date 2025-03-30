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

// 📌 3. Adding & Removing Elements
// Create, insert, and remove elements dynamically.

// 👉 document.createElement(tag) (Creates a new element)
// let newPara = document.createElement("p");
// newPara.textContent = "This is a new paragraph!";

// 👉 parent.appendChild(child) (Adds a child at the end)
// document.body.appendChild(newPara);

// 👉 parent.insertBefore(newChild, existingChild) (Inserts before an element)
// let existingPara = document.querySelector("p");
// document.body.insertBefore(newPara, existingPara);

// 👉 element.remove() (Removes an element)
// let oldDiv = document.getElementById("old");
// oldDiv.remove();


// 📌 4. Event Handling
// Handle user interactions.

// 👉 element.addEventListener(event, callback) (Adds an event listener)
// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     alert("Button Clicked!");
// });

// 👉 element.removeEventListener(event, callback) (Removes an event listener)
// function showAlert() {
//     alert("Clicked!");
// }
// btn.addEventListener("click", showAlert);
// btn.removeEventListener("click", showAlert);

// 📌 5. Traversing the DOM (Moving Between Elements)
// Navigate through elements.
// 👉 element.parentElement (Gets the parent)
// let child = document.querySelector("p");
// console.log(child.parentElement); // Logs parent element

// 👉 element.children (Gets all children)
// let parentDiv = document.querySelector("div");
// console.log(parentDiv.children); // Logs HTMLCollection of child elements

// 👉 element.firstElementChild (Gets first child element)
// console.log(parentDiv.firstElementChild);

// 👉 element.lastElementChild (Gets last child element)
// console.log(parentDiv.lastElementChild);

// 👉 element.previousElementSibling (Gets previous sibling)
// let nextPara = document.querySelector("p");
// console.log(nextPara.previousElementSibling);

// 👉 element.nextElementSibling (Gets next sibling)
// console.log(nextPara.nextElementSibling);

// 📌 6. Forms & User Input
// Work with forms and input fields.
// 👉 document.forms (Gets all forms)
// console.log(document.forms[0]); // Logs first form

// 👉 document.getElementById("input").value (Gets input value)
// let nameInput = document.getElementById("name");
// console.log(nameInput.value); // Logs input value
// 



console.log("hello")
//querySelectorAll() <-- this returns the datatype of nodelist that is not like array but behaves somewhat like array 

//traversing html collection ;

const templist = document.getElementsByClassName("list_item");
console.log(templist);

//makes an array from the html collextion;
let convertedarray = Array.from(templist) ; 
console.log(convertedarray);

convertedarray[2].style.color="purple";

//query selector vs query selector all 
// -> selector selects the first matching and all selects all the matching and returns them 
// -> selector gives only 1 element ; nodelist is returned in case of all();

let parentselector = document.querySelector(".parent")
console.log(parentselector);

//parent.children returns the childs of the parent
console.log(parentselector.children); 
let random_child = parentselector.lastChild ;

//and you can access them using normal array iterations[0],[3] and all ;
// parent.firstElementChild ; parent.lastElementChild 
//obv first and last child of parent ;

console.log(random_child.parentElement);//gets the parent
console.log(random_child.nextElementSibling);// gets next sibling in this case it would be null :3

//this gives the child nodes 
console.log(parentselector.childNodes)


// creating elements using DOM
let x = document.createElement("div") //basically div holding a paragraph
let y = document.createElement("p") //this is paragraph and other things can also be made like a div

y.style.color = "crimson";
y.style.fontSize = "125% ";
y.textContent = "this is for testing purpose only";
x.style.padding = "5px";

// after doing all this still the element would not be visible as we have not added it into the document so 
document.body.appendChild(x);
//and we have to add p also to the div ;
x.appendChild(y);
//now it should be visible

//generally we add child to parent and then parent to body of the document :3
// The reason we use .lang in querySelector() but just "lang" in getElementsByClassName() comes down to how these methods interpret selectors query uses css selectors whereas get element uses the classname only

//we can also create a function to add elements ;
function addlang(name){
    //document.body.getElementsByClassName(".lang").appendChild(document.createElement("li").setAttribute("class","lang_names").textContent(name));
    let new_name = document.createElement("li");
    new_name.innerText = name ;
    new_name.setAttribute("class","lang_name");
    const parent = document.body.getElementsByClassName("lang")[0];
    parent.appendChild(new_name);
    //this method btw is not optimised and it is better to use textNode insted of innerHTML and innertext bcz
// Less Parsing and Rendering: When you use innerHTML, the browser has to parse the provided string as HTML, even if it's just plain text. This parsing process consumes resources. After parsing, the browser then needs to render the resulting HTML structure. innerText also triggers a re-rendering of the element to calculate the visible text content.
// Direct Manipulation: Creating and appending a text node directly manipulates the Document Object Model (DOM) at a lower level. You're essentially telling the browser: "Here's some text, put it in this element." This avoids the overhead of HTML parsing and the potentially complex rendering calculations involved with innerHTML and innerText.
// Security: While not directly a performance optimization, using innerText or especially innerHTML with user-provided data can open up security vulnerabilities (Cross-Site Scripting or XSS attacks) if the data contains malicious HTML or JavaScript. Text nodes treat the content purely as text, mitigating this risk.
//  updated code would be like 
    // let new_name = document.createElement("li");
    // let textNode = document.createTextNode(name); // this Create a text node
    // new_name.appendChild(textNode);             //this Append the text node to the li
    // const parent = document.body.getElementsByClassName("lang")[0];
    // parent.appendChild(new_name);
}
addlang("python");
addlang("Ocaml");

//editing element ; editing can be done in same way so i'll try making a function for the same ;
//lol won't happen will write normally only XD
// document.querySelector(".")

//last thing i am doing is on line no 241 as adding classname also for my table vid 14:28 ; 

















