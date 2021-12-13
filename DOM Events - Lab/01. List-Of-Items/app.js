function addItem() {
  let getElement = document.getElementById("newItemText").value;

  
  let liElement = document.createElement("li");
  liElement.appendChild(document.createTextNode(getElement));
  document.getElementById("items").appendChild(liElement);

  document.getElementById("newItemText").value = "";
}
