window.addEventListener("load", solve);

function solve() {
  let addBtn = document.getElementById("add");

  let modelInput = document.getElementById("model");
  let priceInput = document.getElementById("price");
  let yearInput = document.getElementById("year");
  let descriptionInput = document.getElementById("description");
  let getTBody = document.getElementById("furniture-list");
  let totalSum = 0;
  addBtn.addEventListener("click", gnrtElements);

  function gnrtElements(event) {
    event.preventDefault();
    /// 0 <= 0 ???? /// number is NaN
    if (
      modelInput.value == "" ||
      descriptionInput.value == "" ||
      Number(priceInput.value) < 0 ||
      Number(yearInput.value) < 0 ||
      Number.isNaN(priceInput.value) ||
      Number.isNaN(yearInput.value)
    ) {
      return;
    }

    let creatTr = document.createElement("tr");
    creatTr.className = "info";
    getTBody.appendChild(creatTr);

    let creatModelTd = document.createElement("td");

    creatModelTd.textContent = modelInput.value;
    creatTr.appendChild(creatModelTd);

    let priceModelTd = document.createElement("td");
    priceModelTd.textContent = Number(priceInput.value).toFixed(2);
    creatTr.appendChild(priceModelTd);

    let tdTag = document.createElement("td");
    creatTr.appendChild(tdTag);

    let yearBtn = document.createElement("button");
    yearBtn.classList = "moreBtn";
    yearBtn.textContent = "More Info";
    yearBtn.addEventListener("click", more);
    tdTag.appendChild(yearBtn);

    let buyBtn = document.createElement("button");
    buyBtn.className = "buyBtn";
    buyBtn.textContent = "Buy it";
    buyBtn.addEventListener("click", buy);

    tdTag.appendChild(buyBtn);

    let trTag = document.createElement("tr");
    trTag.className = "hide";
    getTBody.appendChild(trTag);

    let tdYear = document.createElement("td");
    tdYear.textContent = `Year: ${yearInput.value}`;
    trTag.appendChild(tdYear);

    let tdDscr = document.createElement("td");
    tdDscr.colSpan = "3";
    tdDscr.textContent = `Description: ${descriptionInput.value}`;
    trTag.appendChild(tdDscr);

    
    modelInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
    yearInput.value = "";

    function more(e) {
      if (yearBtn.textContent == "More Info") {
        yearBtn.textContent = "Less Info";
        trTag.style.display = "contents";
      } else {
        yearBtn.textContent = "More Info";
        trTag.style.display = "none";
      }
    }
    function buy(e) {
      let total = document.querySelector(".total-price");
      totalSum += Number(priceModelTd.textContent);
      total.textContent = totalSum.toFixed(2);
      creatTr.remove();
      trTag.remove();
    }
  }
}

