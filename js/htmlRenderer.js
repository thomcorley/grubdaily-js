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

const els = {
  span: htmlElement("span"),
  header: htmlElement("header"),
  div: htmlElement("div"),
  time: htmlElement("time"),
  p: htmlElement("p"),
  br: htmlElement("br"),
};

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

export { htmlElement, els, render };
