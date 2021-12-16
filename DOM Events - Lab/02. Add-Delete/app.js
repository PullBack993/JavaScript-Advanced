function addItem() {
  let getNewElement = document.getElementById("newItemText");
  let itemElement = document.getElementById("items");

  let liElement = document.createElement("li");
  liElement.textContent = getNewElement.value;

  // Create delete button
  let deleteButton = document.createElement("a");
  deleteButton.setAttribute("href", "#");
  deleteButton.textContent = "[Delete]";

  // Attech delete button
  deleteButton.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });

  // Set items -> HTML
  liElement.appendChild(deleteButton);
  itemElement.appendChild(liElement);

  document.getElementById("newItemText").value = "";
}
