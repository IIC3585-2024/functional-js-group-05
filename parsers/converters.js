import {formatTransform, listRegexTransform} from "./regexParser.js"
import {headingsTransform} from "./headerParser.js"

const listHeadersTransform = (text) => {
  return listRegexTransform(text).split("\n").map((line) => headingsTransform(line)).join("\n")
}

export const convertMarkdonwToHtml = (text) => {
  return formatTransform(listHeadersTransform(text));
}
