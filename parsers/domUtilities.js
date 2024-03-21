import { convertMarkdonwToHtml } from "./converters.js";

export const getElement = (selector) => document.querySelector(selector);

const setTextContent = (selector, text) => {
  const element = getElement(selector);
  if (element) element.textContent = text;
};

const setInnerHTML = (selector, html) => {
  const element = getElement(selector);
  if (element) element.innerHTML = html;
};

export const toggleDisplay = (selector, display) => {
  const element = getElement(selector);
  if (element) element.style.display = display;
};

const parseHTML = (textInput) => {
  const parsedDocument = new DOMParser().parseFromString(
    textInput,
    "text/html"
  );
  return parsedDocument.body.innerHTML;
};

export const parseAndDisplayMarkdown = () => {
  const textInput = getElement("#textInput").value;
  const htmlOutput = convertMarkdonwToHtml(textInput);
  setTextContent("#displayRawHtml", htmlOutput);
  const previewHtml = parseHTML(htmlOutput);
  setInnerHTML("#displayPreviewHtml", previewHtml);
  toggleDisplay("#displayRawHtml", "none");
  toggleDisplay("#displayPreviewHtml", "block");
};
