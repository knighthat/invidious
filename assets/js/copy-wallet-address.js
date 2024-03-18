'use strict';

const elements = document.getElementsByClassName("wallet-address");

for (let e of elements) {
  e.onclick = async () => {
    const textToCopy = e.textContent;

    try {
      await navigator.clipboard.writeText(e.textContent);

      e.textContent = "Copied!"
      setTimeout(() => {
        e.textContent = textToCopy;
      }, 2000);

    } catch (err) {
      console.log('Could not copy address. Copy this yourself: ' + textToCopy);
    }
  }
}
