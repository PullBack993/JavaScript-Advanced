function create(words) {
  let getDivContent = document.getElementById("content");
  
  for (const word of words) {
    let divTag = document.createElement("div");
    let pTag = document.createElement("p");
    pTag.textContent = word;
    pTag.style.display = "none";
    divTag.appendChild(pTag);
    getDivContent.appendChild(divTag);
  }

  getDivContent.addEventListener("click", showTextContent);

  function showTextContent(e) {
    // Check if we take the right element
    if (e.target.matches("#content div")) {
      let p = e.target.children[0];
      p.style.display = "block";
    }
  }
}
