function solve() {
  let textArea = document.querySelector("div textarea");
  let generateBtn = document.querySelector("#exercise button");
  let tableItems = document.querySelector("table.table tbody");
  let buyBtn = document.querySelectorAll("#exercise button")[1];
  let output = document.querySelectorAll('textarea')[1]

  generateBtn.addEventListener("click", generateExpr);
  buyBtn.addEventListener("click", buy);

  function generateExpr(e) {
    const data = JSON.parse(textArea.value);

    for (const el of data) {
      const row = document.createElement("tr");

      const imgCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const priceCell = document.createElement("td");
      const decCell = document.createElement("td");
      const checkCell = document.createElement("td");

      const img = document.createElement("img");
      img.src = el.img;
      imgCell.appendChild(img);

      const namePar = document.createElement("p");
      namePar.textContent = el.name;
      nameCell.appendChild(namePar);

      const pricePar = document.createElement("p");
      pricePar.textContent = el.price;
      priceCell.appendChild(pricePar);

      const decPar = document.createElement("p");
      decPar.textContent = el.decFactor;
      decCell.appendChild(decPar);

      const check = document.createElement("input");
      check.type = "checkbox";
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decCell);
      row.appendChild(checkCell);

      tableItems.appendChild(row);
    }
  }

  function buy(e) {
    const furniture = Array
    .from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map((el) => el.parentElement.parentElement)
    .map((r) => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        deFactor: Number(r.children[3].textContent),
      }));

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (const i of furniture) {
      names.push(i.name);
      total += i.price;
      decFactor += i.deFactor;
    }
    const result = `Bought furniture: ${names.join(", ")}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactor / furniture.length}`;
    output.textContent = result
  }
}
