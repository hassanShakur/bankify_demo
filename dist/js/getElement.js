const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) {
    return el;
  } else {
    console.log(`Error with the selector ${selector}`);
  }
};

export default getElement;
