import {formatTransform, listRegexTransform} from "./regexParser.js"
import {headingsTransform} from "./headerParser.js"

const codeTransform = (text) => {
  return text.split("``").map((line, index) => {
    return index % 2 === 1 ?
      `<code>${line}</code>`
        .replace(/<p>/g, "")
        .replace(/<\/p>/g, "")
    : line
      .replace(/`([^`]*)`/g, "<code>$1</code>");
  }).join('');
}

const listHeadersTransform = (text) => {
  return listRegexTransform(text).split("\n").map((line) => headingsTransform(line)).join("\n")
}

export const convertMarkdonwToHtml = (text) => {
  return codeTransform(formatTransform(listHeadersTransform(text)));
}
