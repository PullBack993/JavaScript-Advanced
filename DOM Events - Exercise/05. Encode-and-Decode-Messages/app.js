function encodeAndDecodeMessages() {
  let [messageElement, receivedElement] = document.querySelectorAll("div textarea");
  let [encodeBtn, decodeBtn] = document.querySelectorAll("div button");

  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener('click', decode)

  function encode(e) {
    let character = Array.from(messageElement.value);
    result = "";
    for (const char of character) {
      charToNum = char.charCodeAt(char) + 1;
      result += String.fromCharCode(charToNum)
    }
    receivedElement.textContent = result
    messageElement.value = ''
  }

  function decode(e) {
    let character = Array.from(receivedElement.value);
    result = "";
    for (const char of character) {
      charToNum = char.charCodeAt(char) - 1;
      result += String.fromCharCode(charToNum)
    }
    receivedElement.textContent = result
  }
}
