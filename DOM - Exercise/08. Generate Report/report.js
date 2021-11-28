function generateReport() {
  let inputElements = Array.from(document.querySelectorAll("thead th"));
  let tableRows = Array.from(document.getElementsByTagName("tr"));

  const checkedColsIndex = [];
  const resultArr = [];

  // Find checked boxes
  inputElements.forEach(function (el, index) {
    if (el.children[0].checked === true) {
      checkedColsIndex.push(index);
    }
  });

  for (let i = 1; i < tableRows.length; i++) {
    const iterObj = {};

    for (let x = 0; x < checkedColsIndex.length; x++) {
      //Take index(Number)
      let index = Number(checkedColsIndex[x]);

      // Taka name of checked row(for judge toLowerCase and without white space)
      let propertyName = inputElements[index].textContent.toLowerCase().trim();

      //Taka row just from marked checkboxes(faster)
      let element = tableRows[i].children[index];

      //Set it to Object
      iterObj[propertyName] = element.textContent;
    }
    // Append(save) result from iteration befor cleaned(new iteration)
    resultArr.push(iterObj);
  }

  document.getElementById("output").value = JSON.stringify(resultArr, null, 2);
}
