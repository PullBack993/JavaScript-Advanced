window.addEventListener("load", solve);

function solve() {
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let description = document.getElementById("description");
  let price = document.getElementById("price");
  let addBtn = document.getElementById("add");

  let furnitureListArea = document.getElementById("furniture-list");
  let totalPrice = 0;
  addBtn.addEventListener("click", addList);

  function addList(e) {
    e.preventDefault();
    if (
      !model.value ||
      Number(year.value) < 0 ||  
      Number(price.value) < 0 ||  
      !description.value
    ) {
      return;
    } // TODO check it !

    let tr = document.createElement("tr");
    tr.classList.add("info");

    let firstTd = document.createElement("td");
    firstTd.textContent = model.value;
    let secondTd = document.createElement("td");
    secondTd.textContent = Number(price.value).toFixed(2);

    let tdButton = document.createElement("td");
    let moreBtn = document.createElement("button");
    moreBtn.classList.add("moreBtn");
    moreBtn.textContent = "More Info";
    moreBtn.addEventListener("click", moreInfo);

    let buyBtn = document.createElement("button");
    buyBtn.classList.add("buyBtn");
    buyBtn.textContent = "Buy it";
    buyBtn.addEventListener("click", buyItem);

    let secondTr = document.createElement("tr");
    secondTr.classList.add("hide");
    let yearTd = document.createElement("td");
    yearTd.textContent = `Year: ${year.value}`
    let descTd = document.createElement("td");
    descTd.colSpan = "3";
    descTd.textContent = `Description: ${description.value}`

    secondTr.appendChild(yearTd);
    secondTr.appendChild(descTd);

    tr.appendChild(firstTd);
    tr.appendChild(secondTd);

    tdButton.appendChild(moreBtn);
    tdButton.appendChild(buyBtn);

    tr.appendChild(tdButton);

    furnitureListArea.appendChild(tr);
    furnitureListArea.appendChild(secondTr);


    function moreInfo(e) {
      if (e.currentTarget.textContent === "More Info") {
        e.currentTarget.textContent = "Less Info";
        secondTr.style.display = "contents";
      } else {
        e.currentTarget.textContent = "More Info";
        secondTr.style.display = "none";
      }
    }

    function buyItem(e) {
      totalPrice += Number(price.value);
      let total = document.querySelector("#information > tfoot > tr > td.total-price")
      total.textContent = totalPrice.toFixed(2)
      e.currentTarget.parentNode.parentNode.remove();
    }
  }
}



'<trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>2016</td><tdcolspan="3">Comfortableforyouandyourpet!</td></tr>'
'<trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>'
