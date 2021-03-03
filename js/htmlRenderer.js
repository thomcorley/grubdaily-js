const htmlElement = (element) => ({
  className = "",
  children = [],
  innerHTML,
  attributes = {}
}) => ({
  element,
  className,
  children,
  innerHTML,
  attributes
});

const span = htmlElement("span")
const header = htmlElement("header")
const div = htmlElement("div")
const time = htmlElement("time")
const p = htmlElement("p")
const br = htmlElement("br")
const h1 = htmlElement("h1")

const render = (target, { element, className, children, innerHTML, attributes }) => {
  const el = document.createElement(element);
  const attributeKeys = Object.keys(attributes);

  if (attributeKeys.length > 0) {
    attributeKeys.forEach(key => {
      el.setAttribute(key, attributes[key])
    });
  };

  if (innerHTML) {
    el.innerHTML = innerHTML;
  } else if (children.length > 0) {
    children.forEach(child => {
      el.appendChild(render(el, child));
    })
  };

  if (className != "") {
    el.className = className;
  }


  target.appendChild(el);

  return el
};

export {
  htmlElement,
  render,
  span,
  header,
  div,
  time,
  p,
  br,
  h1
};
