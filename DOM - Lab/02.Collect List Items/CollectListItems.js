function extractText() {
    let elements = document.querySelectorAll("ul#items li");
    let textarea = document.getElementById("result")
    for (let node of elements) {
        textarea.value += node.textContent + "\n";
      }
    
}
