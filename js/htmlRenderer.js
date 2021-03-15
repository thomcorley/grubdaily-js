const clearElements = (elements) => {
  while (elements.firstChild) {
    elements.removeChild(element.lastChild);
  }
};

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

export const span = htmlElement("span")
export const header = htmlElement("header")
export const div = htmlElement("div")
export const time = htmlElement("time")
export const p = htmlElement("p")
export const br = htmlElement("br")
export const h1 = htmlElement("h1")
export const img = htmlElement("img")

export const render = (target, { element, className, children, innerHTML, attributes }) => {
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
