document.addEventListener('DOMContentLoaded', function () {
  console.log('We are loaded!');
});

const headerElement = document.getElementById("pageBanner");
console.log(headerElement);

const divElements = document.getElementsByTagName("div");
console.log(divElements);

const cursiveElements = document.getElementsByClassName("cursive");
console.log(cursiveElements);

const cursiveDiv2Element = document.querySelector("main:nth-child(2)")
console.log(cursiveDiv2Element);

const allChildrenOfMainElements = document.querySelectorAll("main > *")
console.log(allChildrenOfMainElements);

const firstDiv = divElements[0];
const secondDiv = divElements.div2;

const totalDivs = divElements.length;

// for(const item of collection) {
//    statements (the code you want to use to manipulate the items)
// }

for (const d of divElements) {
  console.log(d.id);
}

const bodyChildElements = document.body.children;
console.log(bodyChildElements);

//bodyChildElements[0] -> First child
// parent.firstChild

const content = document.getElementById("pageContent");

const firstChildNode = content.firstChild;
console.log(firstChildNode);

const firstContentChildElement = content.firstElementChild;
console.log(firstContentChildElement);

const para = document.querySelector("main > p");
const lastParaChildNode = para.lastChild;
console.log(lastParaChildNode);

const lastParaChildElement = para.lastElementChild;
console.log(lastParaChildElement);

const childElement = document.querySelector("h1");
const h1ParentElement = childElement.parentNode;
console.log(h1ParentElement);

//perviousElementSibling
const currentElement1 = document.querySelector("main");
const prevSib = currentElement1.previousElementSibling;
console.log(prevSib);


// nextElementSibling
const currentElement2 = document.querySelector("header");
const nextSib = currentElement2.nextElementSibling;
console.log(nextSib);

//Add element, three steps
// create object for element
//document.createElement(elementName)
const newArticle = document.createElement("article");

// add object as a child of a parent element
document.querySelector("main").append(newArticle);

// inster text and tags into new object

const newNav = document.createElement("nav");
document.querySelector("main").prepend(newNav);

const newDiv = document.createElement("div");
document.getElementById("div2").after(newDiv);

// element.innerHTML = text
newNav.innerHTML = "<h2>Navigation</h2>";

// Insert text
//insertAdjacentText() -> element.insertAdjacentText(location, text)

// Insert tags and text
// insertAdjacentHTML() -> element.insertAdjactentHTML(location, data)

// Locations -> beforebegin, afterend, beforeend, afterbegin
document.querySelector('main').insertAdjacentHTML
("beforebegin", "<section>I am a section</section>");

document.querySelector('h2').insertAdjacentText("beforeend", " - Main");

// element.remove()
console.log(divElements[0]);
document.getElementById("div1").remove();

// CSS with JS
 const pageTitle = document.querySelector("h1");
 pageTitle.style.fontSize = "64px";
 pageTitle.style.color = "Maroon";
 pageTitle.style.textAlign = "center"
 pageTitle.style.border = "1px solid black";

// element.classList
// element.classList.add("class1, class2,...")
document.querySelector("h2").classList.add("nav-heading");

// element.classList.remove()
document.getElementById('div2').classList.remove('cursive');

// element.classList.toggle(class)
document.querySelector('p').classList.toggle("cooking");
// console.log("toggles a class on the P element");
// document.querySelector('p').classList.toggle("cooking");

const kaleImage = document.getElementById("kale-image");
console.log(kaleImage.id);
console.log(kaleImage.src);
console.log(kaleImage.alt);

// element.getAttribute(attribute)
const srcKaleImage = kaleImage.getAttribute("src");
console.log(srcKaleImage);

// setting attribute
// element.setAttribute(attribute, value)
const div3Element = document.getElementById("div3");
div3Element.setAttribute("id", "div4");
console.log(divElements[2]);

for ( d of divElements) {
  if (!d.id) {
    d.setAttribute("id", "div3")
    console.log(div3);
  }
}

// remove attribute
// element.removeAttribute(attribute)
const mainElement = document.getElementById("pageContent");
mainElement.removeAttribute("id");

//* Events
// event listener
// callback function

// element.addEventListner
const myButton = document.getElementById("myButton");
// annoy function
myButton.addEventListener( 'click', () => {
  const myDiv = document.getElementById("myDiv");
  myDiv.innerHTML = "<h2> Yay, you clicked it! </h2>"
});

const myButton2 = document.getElementById("myButton2")
const addTextOnClick = () => {
  myButton2.insertAdjacentHTML("afterend", "<h2> Hey, you clicked the second button! </h2>")
};
// calling named function
myButton2.addEventListener('click', addTextOnClick);

// Propeties of event object
// target -> button is the target of the click
// which -> key press event
// pageX -> mouse event distance
// pageY -> mouse event distance
// metaKey
// shiftKey

const keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keypress", function (e) {
  const keyOutput = document.getElementById("keyOutput");
  keyOutput.innerHTML = e.key.charCodeAt();
});