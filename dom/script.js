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