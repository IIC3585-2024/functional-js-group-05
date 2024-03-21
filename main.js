import "./style.css";
import {
  parseAndDisplayMarkdown,
  getElement,
  toggleDisplay,
} from "./parsers/domUtilities";

getElement("#convertButton").addEventListener("click", parseAndDisplayMarkdown);
getElement("#rawHtmlButton").addEventListener("click", () => {
  toggleDisplay("#displayRawHtml", "block");
  toggleDisplay("#displayPreviewHtml", "none");
});

getElement("#previewHtmlButton").addEventListener("click", () => {
  toggleDisplay("#displayRawHtml", "none");
  toggleDisplay("#displayPreviewHtml", "block");
});
