# JavaScript DOM & Events – Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- **getElementById("id")**

  - Used to select a single element by its `id`.
  - Always returns only one element (since `id` should be unique).

- **getElementsByClassName("class")**

  - Used to select all elements with the given class.
  - Returns an **HTMLCollection** (like an array but not exactly).
  - You have to loop through it if you want to use multiple elements.

- **querySelector("selector")**

  - Uses **CSS selectors** to find elements (like `.class`, `#id`, `tag`, etc.).
  - Returns the **first matching element only**.

- **querySelectorAll("selector")**
  - Same as above but returns **all matching elements**.
  - Returns a **NodeList** (which you can loop with `forEach`).

---

### 2. How do you create and insert a new element into the DOM?

Steps:

1. Create the element → `document.createElement("div")`.
2. Add text or attributes → `element.innerText = "Hello"` or `element.classList.add("box")`.
3. Insert into the page using →
   - `parent.appendChild(element)` (adds at the end), or
   - `parent.insertBefore(element, child)` (adds before a specific child).

Example:

```js
const newDiv = document.createElement("div");
newDiv.innerText = "I am a new div";
document.body.appendChild(newDiv);
```

---

### 3. What is Event Bubbling and how does it work?

- Event bubbling means when an event (like a `click`) happens on a child element, it **bubbles up** to its parent, then grandparent, and so on until `document`.
- Example: If you click a `<button>` inside a `<div>`, first the button’s handler runs, then the div’s handler (if any), then the body, etc.
- This is the **default behavior** in JavaScript event handling.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event delegation means attaching a single event listener to a parent element to handle events for its child elements.
- Instead of adding listeners to each child, we use the bubbling feature to capture events.
  Example:

```js
document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert("You clicked: " + e.target.innerText);
  }
});
```

- Why useful?

  1. Performance → fewer event listeners.
  2. Dynamic elements → if new children are added later, they still work without extra listeners.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault()

  - Stops the default action of an element.
  - Example: Prevent a form from submitting or prevent an <a> tag from navigating.

- stopPropagation()
  - Stops the event from bubbling up to parent elements.
  - Example: If you click a button inside a div, calling stopPropagation() will prevent the div’s click listener from running.
