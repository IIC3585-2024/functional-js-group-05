const sameCharCount = (firstElement, char, count) => {
  return firstElement === char.repeat(count);
};

const headerCount = (text, char, count) => {
  return count < 7 ?
    headerTransform(text, char, count) : paragraphTranform(text);
}

const headerTransform = (text, char, count) => {
  return sameCharCount(text.split(" ")[0], char, count) ?
    `<h${count}> ${text
      .split(" ")
      .slice(1)
      .join(" ")} </h${count}>` : headerCount(text, char, count + 1)
}

const paragraphTranform = (text) => {
  return `<p>${text}</p>`;
}

export const headingsTransform = (text) => {
  return headerCount(text, "#", 1);
};