__.querySelector__
- returns the __first Element__ within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
- querySelector is NOT live, it will only be updated after you query again
```javascript
let element = document.querySelector(selectors);
let p = document.querySelector("p"); //select by HTML tag (string - can be lowercase or uppercase)
let p1 = document.querySelector("div p"); //select p only inside div

let div = document.querySelector("div"); 
let divPs = div.querySelectorAll("p"); //we can query the node (if known), instead of doc
console.log(divPs);

let li3 = document.querySelector("li:nth-of-type(3)"); //select the 3rd li

let formButton = document.querySelector("input[type=submit]"); //select input field
```
---
__.querySelectorAll__
- returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
- NodeList can be accessed like an array, e.g. NodeList[0] //first element
- NodeList can be converted to actual arrays
```javascript
let allPsArray = Array.from(allPs);  //convert it into a REAL array
console.log(allPsArray);
```

__.getElementsByTagName__
-  returns an __HTMLCollection of elements__ with the given tag name. The complete document is searched, including the root node. The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.
```javascript
let elements = document.getElementsByTagName(name);
```
__.getElementById__
__.getElementsByClassName__

```javascript
let allUL = document.querySelectorAll("ul"); //select by HTML tag
let y = document.getElementsByTagName("UL");

let allP = document.querySelectorAll("#my-paragraph"); //select by ID #
let x = document.getElementById("page-form");

let allClass = document.querySelectorAll(".p-class"); //select by class .
let list = document.getElementsByClassName("p-class");
```
---
__.innerHTML__

- Return the innerHTML property (HTMLElementObject.innerHTML)
```javascript
let p = document.querySelector("p");
p.innerHTML // "this is a paragraph"
```
- Set the innerHTML property (HTMLElementObject.innerHTML = text)
```javascript
p.innerHTML = "this paragraph has been changed"
// "this paragraph has been changed"

ul.innerHTML // is a string
ul.innerHTML += `<li>New li element</li>`;  //short hand to overwrite
ul.innerHTML = ul.innerHTML + `<li>New li element</li>`; //long hand to overwrite
//back tick allows you to add multi lines element, regular quote allows you to add single line element

ul.innerHTML = null; //remove all of the innterHTML by setting it to null

```

__.textContent__:represents the text content of the node and its descendants.
- important difference with .innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

---
__.createElement__
- creates the HTML element specified by tagName
- let element = document.createElement(tagName[, options]);
```javascript
let newDiv = document.createElement("div");
newDive.innerHTML = "Awesome div text";
```
---
__.appendChild__
-  adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position
```javascript
document.body.appendChild(newDiv);   //append element as a child of body
```

__.prepend__
- The ParentNode.prepend() method inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.


---
__.removeChild__: removes a child node from the DOM and returns the removed node (we can only remove if we know the parent)

```javascript
let li1 = document.querySelector("li");   //coz it’s the 1st one, you don’t have to specify
li1.parentNode.removeChild(li1);   //how to work around
```

__.remove()__: ChildNode.remove() method removes the object from the tree it belongs to.

---

__.classList__: is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.

```javascript
let title = document.querySelector("h1");

title.classList.add("blue");      //add class
title.classList.remove("blue");   //remove class
title.classList.toggle("blue");  //if it’s there, remove it; if it’s not there, add class
// return: true
title.classList.toggle("blue");  //if it’s there, remove it; if it’s not there, add class
// return: false
```
---

__Object.assign__: We can assign multiple attributes at once using Object.assign()
```javascript
Object.assign(formButton, {
    id: "form-button",
    value: "ok you can click"
});
```
---
##### Adding & Retrieving CSS Styles

```javascript
title.style.paddingLeft = "100px";   //anything with hyphen in CSS, we changed it to camel case

title.style // show all the styling

title.style.color // only show inline style
//will not give us any computed style such as from a class or styling inherited from its parent.

window.getComputedStyle(title).getPropertyValue("color");
//retrieve computed style (e.g. color added by CSS)

```
---
__.addEventListener__
__event.target__: Get the element that triggered a specific event:

```javascript
//addEventListener takes 2 args
    // 1st arg: event (e.g. "click"): https://developer.mozilla.org/en-US/docs/Web/Events
    // 2st arg: callback func (what we wanna do)
document.querySelector("input[type=submit]").addEventListener("click", (event) => {
    event.preventDefault();  //disable browsers default behaviour(i.e. won't submit the form)
    // console.log(event.target); 
    event.target.value += "!";  //every time you click btn, it adds ! to the value
} );

```


---
__document.write()__: will override the whole HTML document.
