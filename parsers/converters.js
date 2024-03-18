import {formatTransform, listRegexTransform} from "./regexParser.js"
import {headingsTransform} from "./headerParser.js"

const codeTransform = (text) => {
  return text.split("``").map((line, index) => {
    return index % 2 === 1 ? `<code>${line}</code>`.replace(/<p>/g, "").replace(/<\/p>/g, "")
    : line.replace(/`([^`]*)`/g, "<code>$1</code>");
  }).join('');
}

const listHeadersTransform = (text) => {
  return listRegexTransform(text).split("\n").map((line) => headingsTransform(line)).join("\n")
}

export const convertMarkdonwToHtml = (text) => {
  return codeTransform(formatTransform(listHeadersTransform(text)));
}

const text = "# Sample Markdown\n\nThis is some basic, sample markdown.\n\n## Second Heading\n\n * Unordered lists, and:\n  1. One\n  1. Two\n  1. Three\n * More\n\n> Blockquote\n\nAnd **bold**, *italics*, and even *italics and later **bold***. Even ~~strikethrough~~. [A link](https://markdowntohtml.com) to somewhere.\n\nAnd code highlighting:\n\n``js\nvar foo = 'bar';\n\nfunction baz(s) {\n   return foo + ':' + s;\n}\n``\n\nOr inline code like `var foo = 'bar';`.\n\nOr an image of bears\n\n![bears](http://placebear.com/200/200)\n\nThe end ..."

console.log(convertMarkdonwToHtml(text));
