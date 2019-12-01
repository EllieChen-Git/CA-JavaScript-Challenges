__.querySelector__
- returns the __first Element__ within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
- querySelector is NOT live, it will only be updated after you query again
```javascript
// Rule: let element = document.querySelector(selectors);
let p = document.querySelector("p"); //select by HTML tag (string - can be lowercase or uppercase)
let p1 = document.querySelector("div p"); //select p only inside div

let div = document.querySelector("div"); 
let divPs = div.querySelectorAll("p"); //we can query the node (if known), instead of the document

let li3 = document.querySelector("li:nth-of-type(3)"); //select the 3rd li

let formButton = document.querySelector("input[type=submit]"); //select submit button in form
```
---
__.querySelectorAll__
- returns a static (not live) NodeList representing __a list of the document's elements__ that match the specified group of selectors.
- NodeList can be accessed like an array, e.g. NodeList[0] //first element
- NodeList can be converted to actual arrays by the following method
```javascript
let allPsArray = Array.from(allPs);  //convert it into a REAL array
console.log(allPsArray);
```

__.getElementsByTagName__
__.getElementById__
__.getElementsByClassName__
-  returns an __HTMLCollection of elements__ with the given tag name/id/class name. The complete document is searched, including the root node. The returned HTMLCollection is __live__, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName()/.getElementById()/.getElementsByClassName() again.
```javascript
//select by HTML tag
let allUl = document.querySelectorAll("ul"); 
let y = document.getElementsByTagName("ul");
//select by ID #
let allP = document.querySelectorAll("#my-paragraph"); 
let x = document.getElementById("page-form");
//select by class .
let allClass = document.querySelectorAll(".p-class"); 
let list = document.getElementsByClassName("p-class");
```
---
__.innerHTML__
- Return the innerHTML property (HTMLElementObject.innerHTML)
```javascript
let p = document.querySelector("p");
p.innerHTML // return "this is a paragraph"
```
- Set the innerHTML property (HTMLElementObject.innerHTML = text)
```javascript
p.innerHTML = "this paragraph has been changed" // "this paragraph has been changed"

ul.innerHTML // return "is a string"
ul.innerHTML += `<li>New li element</li>`;  //short hand to overwrite
ul.innerHTML = ul.innerHTML + `<li>New li element</li>`; //long hand to overwrite
//back tick allows you to add multi lines element, regular quote allows you to add single line element

ul.innerHTML = null; //remove all of the innterHTML by setting it to null

```

__.textContent__: represents the text content of the node and its descendants.
- important difference with .textContent and .innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

---
__.createElement__
- creates the HTML element specified by tagName
- let element = document.createElement(tagName[, options]);
```javascript
let btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(btn);               // Append <button> to <body>

//Options: to create an instance of this element programmatically:
let expandingList = document.createElement('ul', { is : 'expanding-list' })
```
- why you can't chain '.createElement' and '.innerHTML': https://stackoverflow.com/questions/40399875/why-can-you-chain-some-javascript-methods-but-not-others

---
__.appendChild__
-  adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position
```javascript
document.body.appendChild(newDiv);   //append element as a child of body
```

__.appendChild vs .append__
- The main difference is that __appendChild is a DOM function__ meanwhile __append is a JavaScript function__.
- __ParentNode.append()__ allows you to also append DOMString object, whereas __Node.appendChild()__ only accepts Node objects.
- __ParentNode.append()__ has no return value, whereas __Node.appendChild()__ returns the appended Node object.
- __ParentNode.append()__ can append several nodes and strings, whereas __Node.appendChild()__ can only append one node.
- In all cases where you can use appendChild, you can use append. But not in reverse.

```javascript
document.getElementById("yourId").append("Hello"); //OK
document.getElementById("yourId").appendChild("Hello"); //“Uncaught TypeError: Failed to execute ‘appendChild’ on ‘Node’: parameter 1 is not of type ‘Node’.”: The appendChild function needs an “element” like a parameter.

var p = document.createElement("p"); //Instead, you can do it like this.
document.getElementById("yourId").appendChild(p);
```
---

__.prepend__
- The ParentNode.prepend() method inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.

---
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
//won't give us any computed style such as from a class or styling inherited from its parent.

window.getComputedStyle(title).getPropertyValue("color");
//retrieve computed style (e.g. color added by CSS)

```
---
__.addEventListener__: addEventListener() method attaches an event handler to the specified element.
- Definition and Usage: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
- HTML DOM Event List: https://www.w3schools.com/jsref/dom_obj_event.asp   

__event.target__: Get the element that triggered a specific event:

```javascript
//addEventListener takes 2 arguments
    // 1st argument: event (e.g. "click"): https://developer.mozilla.org/en-US/docs/Web/Events
    // 2st argument: callback function (what we want to do)

//Event happens when clicking a button
document.querySelector("input[type=submit]").addEventListener("click", (event) => {
    event.preventDefault();  //disable browsers default behaviour(i.e. won't submit the form)
    event.target.value += "!";  //every time you click btn, it adds ! to the value
});

//Event happens when submitting a form
document.querySelector("form").addEventListener("submit", (event) => { 
                event.preventDefault();}
```


---
__document.write()__: will override the whole HTML document.
