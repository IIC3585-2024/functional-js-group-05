import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div style="display: flex;">
      <div style="flex: 1;">
        <input id="textInput" type="text" />
        <button id="copyButton" type="button">Copy Text</button>
      </div>
      <div id="displayText" style="flex: 1;"></div>
    </div>
    <!-- Rest of your code... -->
  </div>
`

document.querySelector('#copyButton').addEventListener('click', () => {
  const textInput = document.querySelector('#textInput');
  const displayText = document.querySelector('#displayText');
  displayText.textContent = textInput.value;
});