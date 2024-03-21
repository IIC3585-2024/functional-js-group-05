# Functional JavaScript

![image](/img/Markdown%20to%20Html%20parser.png)

Raw HTML

![image](/img/Raw%20Markdown%20to%20Html%20parser.png)

## Table of contents

- [Functional JavaScript](#functional-javascript)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Execution](#execution)
    - [Online](#online)
    - [Local](#local)
  - [How to use](#how-to-use)
  - [Features implemented](#features-implemented)
  - [Relevant functions](#relevant-functions)
    - [`headingParser.js`](#headingparserjs)
    - [`regexParser.js`](#regexparserjs)
  - [Contributors](#contributors)

## Description

This is a markdown to HTML parser that uses functional programming; the parser is implemented using the composition of functions and regular expressions.

## Execution

### Online

You can try the solution [here](https://markdown-html-parser.netlify.app/)

### Local

In the case of wanting to run the program locally, the following steps must be followed:

1. Clone the repository
2. Open the terminal and navigate to the project folder
3. Install the dependencies with `bun install`
4. Run the program with `bun run dev`

## How to use

To use the parser, you must write markdown text in the input field that says "Enter Markdown", when you finish writing the markdown text, you have to click the "Convert" button, and the HTML output will be displayed in the output field. To see the raw HTML, you have to click the "Raw HTML" button.

## Features implemented

- [x] Headings `#hi` -> `<hi>`, with `i` being a number between 1 and 6
- [x] paragraph `text` -> `<p>text</p>`
- [x] italic `*text*` -> `<em>text</em>`
- [x] bold `**text**` -> `<strong>text</strong>`
- [x] striketrough `~~text~~` -> `<del>text</del>`
- [x] code ``` ``text`` ``` -> `<code>text</code>`
- [ ] blockquote `>text` -> `<blockquote>text</blockquote>`
- [x] ordered list `1. text` -> `<ol><li>text</li></ol>`
- [x] unordered list `* text` -> `<ul><li>text</li></ul>`
- [x] image `![alt](url)` -> `<img src="url" alt="alt">`
- [x] link `[text](url)` -> `<a href="url">text</a>`

## Relevant functions

### `headingParser.js`

- `headingTransform`: this function receives a string and returns a string with the heading tag that corresponds to the number of `#` that are at the beginning of the string. If the string doesn't start with `#` the function returns the paragraph tag.

### `regexParser.js`

- `regexTransform`: this function receives 3 arguments, the first is a regular expresion, the second is the html tag that will be used to replace the matches of the regular expresion and the third is the string that will be transformed. The function returns the string with the matches of the regular expresion replaced by the html tag.

- `compose`: this function receives multiple functions as arguments and returns the composition of them applied from right to left.

- `formatTransform`: this function is a composition of other functions that are used to transform the format markdown text to html. The functions that are composed are `codeTransform`, `linkRegexTransform`, `italicRegexTransform`, `boldRegexTransform` and `strikethroughRegexTransform`.

- `listRegexTransform`: this function is a composition of other functions that are used to transform the markdown lists to html. The functions that are composed are `fixNestingForOrderedListInUnorderedList` and `listTransform`.

## Contributors

- [Bastian Marinkovic](https://github.com/BMarink512/)
- [Ignacio Porte](https://github.com/IgnacioPorte)
- [Maximiliano Torres](https://github.com/Maxi1805)
