function notify(message) {
  let textArea = document.querySelector("#notification")
  textArea.style.display = 'block'
  textArea.textContent = message
  textArea.addEventListener('click', () => {textArea.style.display = 'none'})
}