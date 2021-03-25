// Non-JSX declarative version

// a very generic html element
const htmlEl = (element) => ({
  className = "",
  children = [],
  innerHTML
}) => ({
  element,
  className,
  children,
  innerHTML,
})

// a span - in our case just an html element with element="span"
const span = htmlEl("span");
// same for div
const div = htmlEl("div");

// take each element object - inspect it and create an actual element in the page
// if there are children, render each and appendChild to the element
const render = (target, {
  element,
  className,
  children,
  innerHTML
}) => {

  const el = document.createElement(element);

  if (innerHTML) {
    el.innerHTML = innerHTML;
  } else if (children.length > 0) {
    children.forEach(child => {
      el.appendChild(render(el, child));
    })
  }

  el.className = className;
  target.appendChild(el);

  return el
}

// example data that we may have
const tags = [
  "foo",
  "bar",
  "baz",
];

// declarative html of what we want to render, this is just an object (try console.log(myStuff))
const myTags = tags.map(tag => div({ innerHTML: tag, className: "blue" }));

const myStuff = span({ children: myTags })

// actually does the rendering
render(document.body, myStuff);

// JSX version

// This magic comment lets Babel know to use createElement when it encounters JSX
/** @jsx createElement */


// essentially translates from JSX into an htmlEl
// which means this is compatible with our "render" function
const createElement = (tag, props, ...childrenL) => {
  const children = childrenL[0];
  const el = {
    element: tag,
  };
  if (props) {
    if (props.className) {
      el.className = props.className;
    }
    if (props.innerHTML) {
      el.innerHTML = props.innerHTML;
    }
  }

  if (children) {
    if (typeof children === "string") {
      el.innerHTML = children;
    } else {
      el.children = children
    }

  } else {
    el.children = []
  }

  return el;
}

const myTagsJSX = tags.map(tag => <div className="blue">{tag}</div>);

const myStuffJSX = <span>{myTagsJSX}</span>;
// try console.log(myStuffJSX), should be exactly the same as console.log(myStuff)
render(document.body, myStuffJSX);
