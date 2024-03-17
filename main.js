import "./style.css";

const getElement = selector => document.querySelector(selector);

const setTextContent = (selector, text) => {
  const element = getElement(selector);
  if (element) element.textContent = text;
};

const setInnerHTML = (selector, html) => {
  const element = getElement(selector);
  if (element) element.innerHTML = html;
};

const toggleDisplay = (selector, display) => {
  const element = getElement(selector);
  if (element) element.style.display = display;
};

const parseHTML = textInput => {
  const parsedDocument = new DOMParser().parseFromString(textInput, "text/html");
  return parsedDocument.body.innerHTML;
};

const copyTextToDisplay = () => {
  const textInput = getElement("#textInput").value;
  setTextContent("#displayRawHtml", textInput);
  const previewHtml = parseHTML(textInput);
  setInnerHTML("#displayPreviewHtml", previewHtml);
  toggleDisplay("#displayRawHtml", "none");
  toggleDisplay("#displayPreviewHtml", "block");
};

getElement("#convertButton").addEventListener("click", copyTextToDisplay);
getElement("#rawHtmlButton").addEventListener("click", () => {
  toggleDisplay("#displayRawHtml", "block");
  toggleDisplay("#displayPreviewHtml", "none");
});

getElement("#previewHtmlButton").addEventListener("click", () => {
  toggleDisplay("#displayRawHtml", "none");
  toggleDisplay("#displayPreviewHtml", "block");
});
