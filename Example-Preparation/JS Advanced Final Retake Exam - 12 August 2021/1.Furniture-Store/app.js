function solve() {
  let AddBtn = document.getElementById("add");

  let modelInput = document.getElementById("model");
  let priceInput = document.getElementById("price");
  let getTBody = document.getElementById("furniture-list");

  AddBtn.addEventListener('click', gnrtElements);

  function gnrtElements(e) {
    e.preventDefault();
    let creatTr = document.createElement("tr");
    creatTr.className = "info";
    let allFieldCorrect = true;

    if (modelInput.value !== "") {
      let creatModelTd = document.createElement("td");
      creatModelTd.textContent = modelInput.value;
    } else {
      allFieldCorrect = false;
    }

    if (priceInput.value < !0) {
      let priceModelTd = document.createElement("td");
      priceModelTd.textContent = priceInput.value;
    } else {
      allFieldCorrect = false;
    }

    if (allFieldCorrect) {
      creatTr.appendChild(creatModelTd);
      creatTr.appendChild(priceModelTd);
      getTBody.appendChild(creatTr);
    }
  }

}
window.addEventListener("load", solve);
